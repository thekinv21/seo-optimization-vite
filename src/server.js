// For create express server
import express from 'express'

// For read file
import fs from 'node:fs/promises'

// For path
import path from 'node:path'

// ENV constant
const isProduction = process.env.PROD || false
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// if isProduction is true, read index.html file from dist/client folder

const templateHtml = isProduction
	? await fs.readFile('./dist/client/index.html', 'utf-8')
	: ''

// if isProduction mode is true, read ssr-manifest.json file from dist/client/.vite folder

const ssrManifest = isProduction
	? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
	: undefined

// Create express app

const app = express()

// if isProduction mode is false, import vite and create vite server with middleware mode

let vite
if (!isProduction) {
	const { createServer } = await import('vite')

	vite = await createServer({
		server: { middlewareMode: true },
		appType: 'custom',
		base,
	})

	app.use(vite.middlewares)
}

// if isProduction mode is true, import compression and sirv module for compress and serve
else {
	// Sıkıştırma ve sunma işlemleri için gerekli modülleri import eder
	const compression = (await import('compression')).default
	const sirv = (await import('sirv')).default
	app.use(compression())
	app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Get all request

app.get('*', async (req, res) => {
	try {
		// request url
		const url = req.originalUrl.replace(base, '/')

		let template, render

		// if is production mode is false
		if (!isProduction) {
			// 1.read index.html file
			template = await fs.readFile('./index.html', 'utf-8')

			// 2. transform index.html file
			template = await vite.transformIndexHtml(url, template)

			// 3. import entry-server.jsx file
			render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
		} else {
			// else, templateHtml and render function
			template = templateHtml

			// for base root path
			const appRoot = (await import('app-root-path')).default

			// entry-server.js file path
			const entryServer = path.join(appRoot.path, 'dist/server/entry-server.js')

			// render entry-server.js file
			render = (await import(entryServer)).render
		}

		// render function
		const rendered = await render(url, ssrManifest)

		// Change template html inside app-head and app-html
		const html = template
			.replace(`<!--app-head-->`, rendered.head ?? '')
			.replace(`<!--app-html-->`, rendered ?? '')

		// Send response
		res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
	} catch (e) {
		vite?.ssrFixStacktrace(e)
		console.log(e.stack)
		res.status(500).end(e.stack)
	}
})

// Start http server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`)
})
