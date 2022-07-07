import { MeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction, IUserData } from './me/actions';
import { ActionCreator, AnyAction, createStore, Reducer } from 'redux'
import { meReducer } from './me/reducer';

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export type RootState = {
    commentText: string,
    token: string,
    me: MeState
}
const initialState: RootState = {
    commentText: 'commetnnnt',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}
type MyAction = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction 
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch(action.type) { 
        case UPDATE_COMMENT:
            return {
                ...state, 
                commentText: action.text
            } 
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_REQUEST_ERROR:
        case ME_REQUEST_SUCCESS:
            return {
                ...state, 
                me: meReducer(state.me, action)
            }
        default:
            return state
    }
}

export const updateComment:ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
})
export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
})