import React from "react";
import {Todo} from '../../App';
import styled from "styled-components";


type Props = {
    item: Todo[]
    butClick: (id:string) =>void
    liClick: (id:string) =>void
}

type TodoTextProps = {
    selected: boolean
}

const StyledLi = styled.li `
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
`
const StyledOl = styled.ol`
    min-height: 85vh;
    margin: 0;
    padding: 10px 0 10px 0;
`
const TodoText = styled.a<TodoTextProps>`
    text-decoration: ${(props) => props.selected ? 'line-through' : 'none'};
    user-select: none;
`

export const List: React.FC<Props> = ({item, butClick, liClick})=>{
    return <StyledOl>
        {item.map(val =><div key={val.id}> 
        <StyledLi>
            <TodoText selected={val.completed} onClick={()=>liClick(val.id)}>{val.value}</TodoText>
            <button onClick={()=>butClick(val.id)} >X</button></StyledLi>
            <br></br>
        </div>)}
    </StyledOl>
    
}