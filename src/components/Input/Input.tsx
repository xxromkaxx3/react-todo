import React, { KeyboardEvent, useEffect, useRef } from "react";
import {useDispatch} from "react-redux" 
import { addLiAction, inputTextAction } from "../../redux/actions";
import { useTypedSelector } from "../../redux/typedUseSelector";


type Props = {
}



export const Input: React.FC<Props> = (()=>{
    const dispatch = useDispatch()
    const val = useTypedSelector(state => state.reducer.value)
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(addLiAction())
        }
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{inputRef.current?.focus()},[])

    return <input style={{height:'4vh'}} ref = {inputRef}  type='text' value={val} onKeyDown={onKeyDownHandler} onChange={(e)=>dispatch(inputTextAction(e.target.value))}/>
})
