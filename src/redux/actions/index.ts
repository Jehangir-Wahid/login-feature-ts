import { ActionTypes } from "../action-types"

interface Login {
    type: ActionTypes.LOGIN,
    payload: {
        username: string,
        token: string,
    },
}

interface Logout {
    type: ActionTypes.LOGOUT,
}

interface SetError {
    type: ActionTypes.SET_ERROR,
    payload: string,
}

interface Reset {
    type: ActionTypes.RESET_ERROR,
}

export type Action = Login | Logout | SetError | Reset