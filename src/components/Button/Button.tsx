import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { slice } from "../../redux/reduser";

type Props = {
}


export const Button: React.FC<Props> = ()=>{
    const {addLi} = slice.actions
    const dispatch = useAppDispatch()

    return <button className="button" style={{height:'4vh'}} onClick={()=>dispatch(addLi())}>Сохранить</button>
}