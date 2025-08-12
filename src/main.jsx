import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioWebsite from './PortfolioWebsite.jsx'

// 👉 Import Font
import '@fontsource/roboto'

// 👉 Import Theme tools từ MUI
import { ThemeProvider, createTheme } from '@mui/material/styles'

// 👉 Tạo theme
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6600',
    },
  },
})

// 👉 Render App kèm ThemeProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PortfolioWebsite />
    </ThemeProvider>
  </React.StrictMode>
)