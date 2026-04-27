import { createContext, useContext } from "react";

// creating the context
export const ThemeContext= createContext({
    themeMode: "light",
    lightTheme: ()=> {},
    darkTheme: ()=> {}
})

// just creating an easy Provider name but not giving value= {}.
export const ThemeProvider= ThemeContext.Provider

// creating a custom hook to consume context easily.
export default function useTheme(){
    return useContext(ThemeContext)
}