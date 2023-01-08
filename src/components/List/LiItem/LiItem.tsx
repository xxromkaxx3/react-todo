import React from 'react';
import {Todo} from '../../../App';
import styled from "styled-components";



type Props = {
    item: Todo;
    butClick: (id:string) =>void
    liClick: (id:string) =>void
}

type TextProps = {
    selected: boolean
}
const StyledLi = styled.li `
    cursor: pointer;
    display: inline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
`

const Text = styled.a<TextProps>`
    user-select: none;
    text-decoration: ${props => props.selected? 'line-through' : 'none'};
    word-break: break-word;
`

export const LiItem: React.FC<Props> = ({item, butClick, liClick})=>{
    return  <div>  
        <StyledLi>
        <Text selected = {item.completed} onClick={()=>liClick(item.id)}>{item.value}</Text>
        <button onClick={()=>butClick(item.id)} >X</button> 
        </StyledLi>
        <br/>
        </div>
}