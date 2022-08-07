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

// CLASSES
const classes = {
  root: {
    maxWidth: '600px',
    width: '100%',
    marginX: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '90vh',
    padding: '20px'
  }
}

const Layout : React.FC<ILayout> = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <Box sx={classes.root}>{children}</Box>
    </ThemeProvider>
  )
}

export default Layout