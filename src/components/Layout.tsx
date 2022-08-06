import React from 'react'

// MUIS
import Box from '@mui/material/Box'

// THEME
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'

// TYPES
interface ILayout {
  children: React.ReactNode | JSX.Element;
}

const Layout : React.FC<ILayout> = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <Box>{children}</Box>
    </ThemeProvider>
  )
}

export default Layout