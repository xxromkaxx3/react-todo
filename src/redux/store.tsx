import { configureStore } from '@reduxjs/toolkit'
import { combineReducers} from 'redux'
import reducer from './reduser'


const rootReducer = combineReducers({reducer})

export const store = configureStore({
    reducer:rootReducer
})


export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch