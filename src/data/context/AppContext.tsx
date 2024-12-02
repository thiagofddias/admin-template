import React, { createContext, useEffect, useState } from 'react'

// type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext({})

export function AppProvider(props) {

    const [tema, setTema] = useState('dark')

    function alterarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(tema === '' ? 'dark' : '')
        localStorage.setItem('tema', tema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo ?? 'dark')
    }, [])

    return (
        <div>
            <AppContext.Provider value={{
                tema,
                alterarTema
            }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer