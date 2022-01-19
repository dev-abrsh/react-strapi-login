import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";


export default function Navbar(){
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)

    return(
        <div className="flex justify-between py-6 px-4 sm:px-8">
           <div>logo</div>
           {darkTheme ? <SunIcon className="h-6 w-6" onClick={()=>setDarkTheme(false)}/>: 
            <MoonIcon className="h-6 w-6" onClick={()=>setDarkTheme(true)}/>}
        </div>
    )
}