import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme, customTheme, lightTheme  } from '@/themes';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

function App({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : ( cookieTheme === 'dark' )
        ? darkTheme
        : customTheme
        setCurrentTheme( selectedTheme )   

  }, [])
  

  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App