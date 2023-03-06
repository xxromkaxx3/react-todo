import {Todo} from '../App'



export enum TodoActionsTypes {
    INPUT_TEXT = "INPUT_TEXT",
    ADD_LI = "ADD_LI",
    REMOVE_LI = "REMOVE_LI",
    LINE_THROUGH = "LINE_THROUGH",
    GET_STORAGE_LIST = "GET_STORAGE_LIST"
}


interface InputTextActionType {
    type: TodoActionsTypes.INPUT_TEXT,
    payload: string
}

interface AddLiActionType {
    type: TodoActionsTypes.ADD_LI
}

interface RemoveLiActionType {
    type: TodoActionsTypes.REMOVE_LI,
    payload: string
}

interface LineThroughActionType {
    type: TodoActionsTypes.LINE_THROUGH,
    payload: string
}

interface GetStorageList {
    type: TodoActionsTypes.GET_STORAGE_LIST
}





export interface TodoState {
    list:Todo[],
    value:string
}

export type TodoAction = InputTextActionType | AddLiActionType | RemoveLiActionType | LineThroughActionType | GetStorageList