import React from 'react'

const ThemeContext = React.createContext({
    theme: "",
    setTheme: () => { },
    showThemeSelecter: "",
    setShowThemeSelecter: () => { },
})

export default ThemeContext