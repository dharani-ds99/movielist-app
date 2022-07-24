import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import configureStore from '../src/store/ConfigureStore'
import {Provider} from 'react-redux'

const store=configureStore()
console.log(store)

console.log(store.getState())

store.subscribe(() => {
    console.log('state updated', store.getState())
})

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}>
    <App />
</Provider>)



