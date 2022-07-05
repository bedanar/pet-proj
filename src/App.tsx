import React, { useEffect, useState } from "react";
import {hot} from 'react-hot-loader/root'
import { Layout } from "./shared/Layout";
import './main.global.css'
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { commentContext } from "./shared/context/commentContext";

function AppComponent () {
    // const [token] = useToken()
    const [commentValue, setCommentValue] = useState('')
    const CommentProvider = commentContext.Provider
    return (
        // <tokenContext.Provider value={token}>
        //     <UserContextProvider>
                <CommentProvider value={{
                    value: commentValue,
                    onChange: setCommentValue
                }}>
                    <Layout>
                        <Header/>
                        <Content>
                            <CardsList />
                        </Content>
                    </Layout>
                </CommentProvider>
        //     </UserContextProvider>
        // </tokenContext.Provider>
    )
}

export const App = hot(AppComponent)