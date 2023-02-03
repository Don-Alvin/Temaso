import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme,  } from '@chakra-ui/react'
import App from './App'

const colors = {
  brand: {
    400: '#38B2AC',
    700: '#285E61',
    800: '#234e52',
    900: '#1D4044'
  }
}

const fonts = {
  body: "system-ui, sans-serif",
  heading: "system-ui, sans-serif",
  mono: "system-ui, sans-serif",
  }

const theme = extendTheme({colors, fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
