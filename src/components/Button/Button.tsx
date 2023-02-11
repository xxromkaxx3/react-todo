import React from "react";

type Props = {
    text: string
    onClick:()=>void
}

export const Button: React.FC<Props> = ({text, onClick})=>{
    return <button style={{height:'4vh'}} onClick={onClick}>{text}</button>
}