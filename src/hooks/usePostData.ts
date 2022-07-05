import { tokenContext } from './../shared/context/tokenContext';
import { useState, useEffect, useContext } from "react";
import axios from 'axios'

export function usePostData() {
    const [data, setData] = useState([])
    const token = useContext(tokenContext)
    useEffect(() => {
        axios.get('https://www.reddit.com/dev/api/#GET_best', {
        headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data
            setData(userData)
        })
        .catch(console.log)
    }, [token])
    return [data]
}