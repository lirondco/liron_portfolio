import React, { useEffect, useState } from 'react'
import { getUserLocale } from 'get-user-locale'
import NavbarEN from '../Navbar/NavbarEN'
import NavbarHE from '../Navbar/NavbarHE'
import { Route, Switch } from 'react-router'
import HomePageEN from '../HomePage/HomePageEN'
import HomePageHE from '../HomePage/HomePageHE'
import ProjectsEN from '../Projects/ProjectsEN'
import ProjectsHE from '../Projects/ProjectsHE'
import AboutEN from '../About/AboutEN'
import AboutHE from '../About/AboutHE'
import ContactEN from '../Contact/ContactEN'
import ContactHE from '../Contact/ContactHE'

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
                <Route exact path='/' component={HomePageEN} />
                <Route path='/projects' component={ProjectsEN} />
                <Route path='/about' component={AboutEN} />
                <Route path='/contact' component={ContactEN} />
            </Switch>
        )
    }

    const renderHebrew = () => {
        return (
            <Switch>
                <Route exact path='/' component={HomePageHE} />
                <Route path='/projects' component={ProjectsHE} />
                <Route path='/about' component={AboutHE} />
                <Route path='/contact' component={ContactHE} />
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