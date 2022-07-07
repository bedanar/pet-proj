import { meRequest, meRequestSuccess, meRequestError, meRequestAsync } from './../store/me/actions';
import { useSelector, useDispatch } from 'react-redux';
import { tokenContext } from './../shared/context/tokenContext';
import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { RootState } from '../store/store';

interface IUserData{
    username?: string,
    avatarImage?: string
}

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const token = useSelector<RootState>(state => state.token)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync())
    }, [token])
    return {
        data, loading
    }
}