import { createContext,useContext,useState } from "react";

const AuthContext = createContext({
    login:(token)=>{},
    logout:()=>{},
    token:"",
    isAuthenticated:false,
})

export const AuthProvider = ({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"))
    const login = (token)=>{
        localStorage.setItem("token",token)
        setToken(token)
    }
    const logout = ()=>{
        localStorage.removeItem("token")
        setToken(undefined)
    }
    const value = {
        login,
        logout,
        token,
        isAuthenticated:!!token
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
