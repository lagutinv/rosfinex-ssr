import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

rootElement.hasChildNodes()
    ? hydrate(app, rootElement)
    : render(app, rootElement);

