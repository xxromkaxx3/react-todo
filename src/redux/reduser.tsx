import { nanoid } from 'nanoid'
import {TodoAction, TodoActionsTypes, TodoState} from './types'
import {Todo} from "../App"


const initialState:TodoState = {
    list: [],
    value: ''
}



function reducer (state:TodoState = initialState, action:TodoAction):TodoState{
    const {list, value} = state
    const copyList = list.slice()
    switch (action.type){
        case TodoActionsTypes.INPUT_TEXT:
        {
            return{
                ...state,
                value: action.payload
            }
        }
        case TodoActionsTypes.ADD_LI:
        {
            if (!value) return state
            const id = nanoid()
            const newTodo = {
                value: value,
                completed: false,
                id: id
            }
            const newList = [...list, newTodo]
            const stringList = JSON.stringify(newList)
            localStorage.setItem('list', stringList)
            return {
                ...state,
                list: newList,
                value: ''
            }
        }
        case TodoActionsTypes.REMOVE_LI:
        {
            const newList = copyList.filter(item=>item.id!==action.payload)
            const stringList = JSON.stringify(newList)
            localStorage.setItem('list', stringList)
            return {
                ...state,
                list: newList
            }
        }
        case TodoActionsTypes.LINE_THROUGH:
        {
            const targetIndex = list.findIndex(item => item.id === action.payload)
            const target = list[targetIndex]
            const newTargetState = {...target, completed: !target.completed}
            copyList[targetIndex] = newTargetState
            const stringList = JSON.stringify(copyList)
            localStorage.setItem('list', stringList)
            return {
                ...state,
                list: copyList
            }
        } 
        case TodoActionsTypes.GET_STORAGE_LIST:
        {
            const stringList = localStorage.getItem('list')
            if (!stringList) return state
            const list:Todo[] = JSON.parse(stringList)
            return {
                ...state,
                list: list
            }
        }
        default: 
            return state
    }
}



export default reducer

