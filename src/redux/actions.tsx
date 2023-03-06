import { TodoActionsTypes } from "./types"

export function addLiAction(){
    return ({
        type: TodoActionsTypes.ADD_LI,
    })
}


export function removeLiAction(value:string){
    return ({
        type: TodoActionsTypes.REMOVE_LI,
        payload: value
    })
}


export function lineThroughAction(value:string){
    return ({
        type: TodoActionsTypes.LINE_THROUGH,
        payload: value
    })
}


export function inputTextAction(value:string){
    return ({
        type: TodoActionsTypes.INPUT_TEXT,
        payload: value
    })
}

export function getStorageListAction(){
    return ({
        type: TodoActionsTypes.GET_STORAGE_LIST,
    }) 
}