import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { API_URL } from "../components/API";

const AuthContext = createContext()

export function AuthProvider({children}){
    const [token, setToken] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const refresh = localStorage.getItem('refresh')

    useEffect(()=>{
    const fetchToken = () => {
 if(refresh){
         axios.post(`${API_URL}/auth/refreshToken`, {
             token: refresh,
             renew: true
         }).then(res=>{
             setToken(res.data.jwt)
             setLoggedIn(true)
         }).catch(err=>{
            if(err?.response?.data?.statusCode === 400){
                localStorage.removeItem('refresh')
                setLoggedIn(false)
            }
         })
    }

    }
    fetchToken()
    },[refresh])
    console.log('jwt :', token);

    
    return (
        <AuthContext.Provider value={{token, setToken, loggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext