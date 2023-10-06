import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </Provider>

  </React.StrictMode>,
)
