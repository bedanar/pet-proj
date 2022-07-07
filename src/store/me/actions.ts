import { RootState } from './../store';
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Action } from 'redux';
import axios from 'axios';

export const ME_REQUEST = 'ME_REQUEST'
export type MeRequestAction = {
    type: typeof ME_REQUEST
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export interface IUserData{
    username?: string,
    avatarImage?: string
}
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS,
    data: IUserData
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR,
    error: string
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest())
        axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${getState().token}`}
        })
        .then((resp) => {
            const userData = resp.data
            // setData({username: userData.name, avatarImage: userData.icon_img})
            dispatch(meRequestSuccess({username: userData.name, avatarImage: userData.icon_img}))
        })
        .catch(error => {
            dispatch(meRequestError(String(error)))
        })
}