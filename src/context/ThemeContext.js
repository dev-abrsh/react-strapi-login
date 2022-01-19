import {createContext, useState} from 'react'

 const  ThemeContext = createContext()

export function ThemeProvider({children}){
const [darkTheme, setDarkTheme] = useState('dark')
    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={darkTheme ? 'dark': 'light'}>{children}</div>
        </ThemeContext.Provider>
    )
}


export default ThemeContext