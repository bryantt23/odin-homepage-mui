import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { createTheme, ThemeProvider, } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto", 'sans-serif'
    ].join(","),
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
    },
    h4: {
      fontFamily: 'Playfair Display, serif',
    },
    h5: {
      fontFamily: 'Playfair Display, serif',
    },
    h6: {
      fontFamily: 'Playfair Display, serif',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
