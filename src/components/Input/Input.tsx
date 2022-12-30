import React, { ChangeEvent, KeyboardEvent, useEffect } from "react";



type Props = {
    value: string
    onChange: (val:ChangeEvent<HTMLInputElement>)=>void
    onKeyDown: (val:KeyboardEvent<HTMLInputElement>)=>void
    id: string
}

export const Input =  React.forwardRef<HTMLInputElement, Props>((props, ref)=>{
    const {value, onChange, onKeyDown, id} = props 
    return <input ref = {ref} id={id} type='text' value={value} onKeyDown={onKeyDown} onChange={onChange}/>
})
