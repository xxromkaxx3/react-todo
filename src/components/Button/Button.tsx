import React from "react";
import { useDispatch } from "react-redux";
import { addLiAction } from "../../redux/actions";

type Props = {
}


export const Button: React.FC<Props> = ()=>{
    
    const dispatch = useDispatch()

    return <button className="button" style={{height:'4vh'}} onClick={()=>dispatch(addLiAction())}>Save</button>
}