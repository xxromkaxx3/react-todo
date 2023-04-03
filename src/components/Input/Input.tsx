import React, { KeyboardEvent, useEffect, useRef } from "react";
import { slice } from "../../redux/reduser";
import { useAppDispatch, useTypedSelector } from "../../redux/hooks";


type Props = {
}



export const Input: React.FC<Props> = (()=>{
    const dispatch = useAppDispatch()
    const {list, value} = useTypedSelector(state => state.reducer)
    const {inputText, addLi} = slice.actions
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(addLi())
        }
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{inputRef.current?.focus()},[list])

    return <input style={{height:'4vh'}} ref = {inputRef}  type='text' value={value} onKeyDown={onKeyDownHandler} onChange={(e)=>dispatch(inputText(e.target.value))}/>
})
