import React from "react"
import { usePostData } from "../../hooks/usePostData"


export const postContext = React.createContext([])

interface IPostContextProvider {
    children: React.ReactNode
}
export function UserContextProvider({children}: IPostContextProvider) {
    const [data] = usePostData()
    return (
        <postContext.Provider value={data}>
            {children}
        </postContext.Provider>
    )
}