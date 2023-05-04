import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// extending the theme
// const colors = {
//   brand: {
//     900: '#024fc9',
//     800: '#146af5',
//     700: '#2977f2',
//     600: '#337df2',
//     500: '#4287f5'
//   },
// }
// const fonts = {
//   body: 'Rubik',
//   heading: 'Lato'
// }

// const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ChakraProvider theme={theme}>
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
