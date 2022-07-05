import React, {useState, useEffect, useContext} from "react"
// import { useUserData } from "../../hooks/useUserData"
import axios from "axios"
import { tokenContext } from "./tokenContext"

export interface IUserContextData{
    username?: string,
    avatarImage?: string
}
interface IUserData{
    username?: string,
    avatarImage?: string
}
export const userContext = React.createContext<IUserContextData>({})

interface IUserContextProvider {
    children: React.ReactNode
}
export function UserContextProvider({children}: IUserContextProvider) {
    const [data, setData] = useState<IUserData>({})
    const token = useContext(tokenContext)
    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data
            setData({username: userData.name, avatarImage: userData.icon_img})
        })
        .catch(console.log)
    }, [token])
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}