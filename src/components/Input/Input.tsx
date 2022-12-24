import React, { ChangeEvent, KeyboardEvent } from "react";



type Props = {
    value: string
    onChange: (val:ChangeEvent<HTMLInputElement>)=>void
    onKeyDown: (val:KeyboardEvent<HTMLInputElement>)=>void
    id: string
}


export const Input: React.FC<Props> = ({value, onChange, onKeyDown, id})=>{
    return <input id={id} type='text' value={value} onKeyDown={onKeyDown} onChange={onChange}/>
}