import { tokenContext } from './../shared/context/tokenContext';
import { useState, useEffect, useContext } from "react";
import axios from 'axios'

interface IUserData{
    username?: string,
    avatarImage?: string
}

export function useUserData() {
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
    return [data]
}