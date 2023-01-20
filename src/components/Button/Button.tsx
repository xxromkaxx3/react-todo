import React from "react";

type Props = {
    text: string
    onClick:()=>void
}

export const Button: React.FC<Props> = ({text, onClick})=>{
    return <button style={{height:'35px'}} onClick={onClick}>{text}</button>
}