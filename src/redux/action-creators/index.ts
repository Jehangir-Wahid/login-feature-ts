import { ActionTypes } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const login = (username: string, token: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: { username, token},
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.LOGOUT
        });
    }
}

export const setError = (error: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SET_ERROR,
            payload: error,
        })
    }
}

export const resetError = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.RESET_ERROR
        })
    }
}
