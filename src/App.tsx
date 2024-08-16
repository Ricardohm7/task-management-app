import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from '@components/Header'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import getLPTheme from '@utils/theme'

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={LPtheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header mode={mode} toggleColorMode={toggleColorMode} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App