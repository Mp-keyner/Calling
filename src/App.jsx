import { ThemeProvider } from "@emotion/react"
import { Container, createTheme } from "@mui/material"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Nav from "./components/Nav/Nav";


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
      text: {
        main: '#000'
      },
      background: {
        default: '#de6565',
        paper: '#169ad7',
        secondary: '#fff'
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Nav />

      <Container sx={{
        height: '100vh'
      }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem corrupti beatae, delectus qui dolorem quae expedita? Placeat eius laboriosam autem quasi molestiae eveniet dolore, repellat blanditiis reprehenderit ipsa facilis.</p>
      </Container>
    </ThemeProvider>
  )
}

export default App
