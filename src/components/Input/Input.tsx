import React, { ChangeEvent, KeyboardEvent } from "react";



type Props = {
    value: string
    onChange: (val:ChangeEvent<HTMLInputElement>)=>void
    onKeyDown: (val:KeyboardEvent<HTMLInputElement>)=>void
    id: string
}

export const Input =  React.forwardRef<HTMLInputElement, Props>((props, ref)=>{
    const {value, onChange, onKeyDown, id} = props 
    return <input style={{height:'4vh'}} ref = {ref} id={id} type='text' value={value} onKeyDown={onKeyDown} onChange={onChange}/>
})
