import React from 'react';
import {Todo} from '../../../App';
import styled from "styled-components";
import cross from './cross.png'

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
    align-items: center;
    font-size: 20px;
`
const StyledImg = styled.img `
    cursor: pointer;
    height: 100%;
    width: 150%;

`
const StyledButton = styled.button `
    height: 35px;
    width: 35px;
    border-radius: 100%;
    background: none;
    border: none;
`

const Text = styled.a<TextProps>`
    user-select: none;
    text-decoration: ${props => props.selected? 'line-through' : 'none'};
    max-width: 90%;
    word-break: break-word;
`

export const LiItem: React.FC<Props> = ({item, butClick, liClick})=>{
    return  <div>  
        
        <StyledLi>
        <Text selected = {item.completed} onClick={()=>liClick(item.id)}>{item.value}</Text>
        <StyledButton onClick={()=>butClick(item.id)} >
            <StyledImg src={cross} alt="" />
        </StyledButton> 
        </StyledLi>
        <br/>
        </div>
}