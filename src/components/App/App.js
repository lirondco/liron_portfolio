import React, { useEffect, useState } from 'react'
import { getUserLocale } from 'get-user-locale'
import NavbarEN from '../Navbar/NavbarEN'
import NavbarHE from '../Navbar/NavbarHE'
import { Route, Switch } from 'react-router'
import HomePageEN from '../HomePage/HomePageEN'
import HomePageHE from '../HomePage/HomePageHE'

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
    
    const renderEnglish = () => {
        return (
            <Switch>
                <Route strict to='/' component={HomePageEN} />
            </Switch>
        )
    }

    const renderHebrew = () => {
        return (
            <Switch>
                <Route strict to='/' component={HomePageHE} />
            </Switch>
        )
    }

    return(
        <div className='app'>
            {(language !== 'he-IL' && language !== 'he' )
            ? <NavbarEN handleChangeLang={() => setLanguage('he-IL')}/>
            : <NavbarHE handleChangeLang={() => setLanguage('en')} />
            }

            <main>
            {(language !== 'he-IL' && language !== 'he' )
            ? renderEnglish()
            : renderHebrew()
            }
            </main>
        </div>
    )
}