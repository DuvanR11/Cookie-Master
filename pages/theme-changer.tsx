import { Layout } from '@/components/layouts'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, FC, useState } from 'react'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'
import axios from 'axios'


interface Props {
    theme: string
}

const ThemeChanger: FC<Props> = ({ theme }) => {

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {

    const selectedTheme = event.target.value
    setCurrentTheme( selectedTheme )
    Cookies.set('theme', selectedTheme)

  }

  const onClick = async() => {
    const { data } = await axios.get('/api/hello')
  }

  return (
    <Layout>
       <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                    <RadioGroup
                        value={ currentTheme }
                        onChange={ onThemeChange }
                    >
                        <FormControlLabel value='light' control={ <Radio/> } label='light'/>
                        <FormControlLabel value='dark' control={ <Radio/> } label='dark'/>
                        <FormControlLabel value='custom' control={ <Radio/> } label='custom'/>
                    </RadioGroup>
                </FormControl>
                <Button
                    onClick={ onClick }
                >
                    Solicitud
                </Button>
            </CardContent>
       </Card>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async({ req }) => {

    const { theme = 'light' } = req.cookies

    const validThemes = ['light', 'dark', 'custom']

    return {
      props: {
        theme: validThemes.includes( theme ) ? theme : 'light'
      }, 
    }
  }

export default ThemeChanger