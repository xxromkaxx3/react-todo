import { nanoid } from 'nanoid'
import {TodoState} from './types'
import {Todo} from "../App"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState:TodoState = {
    list: [],
    value: ''
}

export const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        inputText(state, action:PayloadAction<string>){
            state.value = action.payload
            localStorage.setItem('value', action.payload)
        },
        addLi(state){
            if (!state.value) return
            const id = nanoid()
            const newTodo:Todo = {
                value: state.value,
                completed: false,
                id: id
            }
            state.list.push(newTodo)
            const stringState = JSON.stringify(state.list)
            localStorage.setItem('list', stringState)
            state.value = ''
            localStorage.setItem('value', '')
        },
        removeLi(state, action:PayloadAction<string>){
            state.list = state.list.filter(item => item.id !== action.payload)
            const stringState = JSON.stringify(state.list)
            localStorage.setItem('list', stringState)
        },
        lineThrough(state, action:PayloadAction<string>){
            state.list.forEach(item => {if (item.id === action.payload) item.completed = !item.completed})
            const stringState = JSON.stringify(state.list)
            localStorage.setItem('list', stringState)
        },
        getStorage(state){
            const stringList = localStorage.getItem('list')
            const value = localStorage.getItem('value')
            if (!stringList) return 
            const list = JSON.parse(stringList)
            state.list = list
            if (!value) return
            state.value = value
        }
    }
})


export default slice.reducer

