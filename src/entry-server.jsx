import { renderToString } from 'react-dom/server'
import App from './App'
import './index.css'

export const render = () => {
	return renderToString(<App />)
}
