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
import { ActionCreator, AnyAction, applyMiddleware, createStore, Action, Middleware, Reducer } from 'redux'
import {Provider, useDispatch, useSelector} from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./store/store";
import thunk, {ThunkAction} from "redux-thunk";
import { setToken } from "./store/store";
import {commentContext} from './shared/context/commentContext'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
export const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
    dispatch({type: 'START'})
    setTimeout(() => {
        dispatch({type: 'FINISH'})
    }, 1500)
}

function AppComponent () {
    const [token] = useToken()
    const [commentValue, setCommentValue] = useState('')
    const CommentProvider = commentContext.Provider 
    // const dispatch = useDispatch()
    // useEffect(() => {  
    //     const token = localStorage.getItem('token') || window.__token__
    //     store.dispatch(setToken(token))
    //     // @ts-ignore
    //     // dispatch(timeout())
    //     if (token){
    //         localStorage.setItem('token', token)
    //     }
    // }, []) 


    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <CommentProvider value={{
                    value: commentValue,
                    onChange: setCommentValue
                }}>
                    <Provider store = {store}>
                        <Layout>
                            <Header/>
                            <Content>
                                <CardsList />
                            </Content>
                        </Layout>
                    </Provider>
                 </CommentProvider>
             </UserContextProvider>
         </tokenContext.Provider>
    )
}

export const App = hot(AppComponent)