import { ThemeProvider } from "@emotion/react"
import Nav from "./components/Nav"
import { createTheme } from "@mui/material"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#169ad7',
        light: '#0f6b96',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  )
}

export default App
