import React, { useEffect, useState } from 'react'
import NavbarEN from '../Navbar/NavbarEN'
import NavbarHE from '../Navbar/NavbarHE'

export default function App() {
    const [language, setLanguage] = useState('EN')

    useEffect(() => {
        language === 'EN'
        ? document.title = 'Liron de Castro'
        : document.title = 'ליורן דה קסטרו'
    })

    return(
        <div className='app'>
            {(language === 'EN')
            ? <NavbarEN handleChangeLang={() => setLanguage('HE')}/>
            : <NavbarHE handleChangeLang={() => setLanguage('EN')} />
            }
        </div>
    )
}