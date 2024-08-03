import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

if (import.meta.hot || !container.innerText) {
	const root = createRoot(container)
	root.render(<App />)
} else {
	hydrateRoot(container, <App />)
}
