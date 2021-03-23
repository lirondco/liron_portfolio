import React, { useEffect, useState } from 'react'
import { getUserLocale } from 'get-user-locale'
import NavbarEN from '../Navbar/NavbarEN'
import NavbarHE from '../Navbar/NavbarHE'

export default function App() {
    const [language, setLanguage] = useState(getUserLocale())

    useEffect(() => {
        const chosenLanguage = localStorage.getItem("language") || getUserLocale()
        setLanguage(chosenLanguage)
      }, [])

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    useEffect(() => {
        (language !== 'he-IL' && language !== 'he' )
        ? document.title = 'Liron de Castro'
        : document.title = 'ליורן דה קסטרו'
    })

    return(
        <div className='app'>
            {(language !== 'he-IL' && language !== 'he' )
            ? <NavbarEN handleChangeLang={() => setLanguage('he-IL')}/>
            : <NavbarHE handleChangeLang={() => setLanguage('en')} />
            }
        </div>
    )
}