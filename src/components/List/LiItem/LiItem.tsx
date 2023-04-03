import React from 'react';
import {Todo} from '../../../App';
import styled from "styled-components";
import cross from './cross.png';
import { useAppDispatch } from '../../../redux/hooks';
import { slice } from '../../../redux/reduser';

type Props = {
    item: Todo;
}

type TextProps = {
    selected: boolean
}
const StyledLi = styled.li `
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
    width: 100%;
    border-radius: 100%;
    transition: 0.3s;
    &:hover{
        box-shadow: 0 0 10px  red;
    }
`
const StyledButton = styled.button `
    height: 35px;
    width: 35px;
    border-radius: 100%;
    background: none;
    border: none;
    padding: 0;
    position: absolute;
    right: 15px;
`

const Text = styled.a<TextProps>`
    user-select: none;
    text-decoration: ${props => props.selected? 'line-through' : 'none'};
    max-width: 85%;
    word-break: break-word;
    cursor: pointer;
`


export const LiItem: React.FC<Props> = ({item})=>{
    const dispatch = useAppDispatch()
    const {lineThrough, removeLi} = slice.actions
    return  <div>  
        <StyledLi>
        <Text selected = {item.completed} onClick={()=>dispatch(lineThrough(item.id))}>{item.value}</Text>
        <StyledButton onClick={()=>dispatch(removeLi(item.id))} >
            <StyledImg src={cross} alt="" />
        </StyledButton> 
        </StyledLi>
        <br/>
        <br/>
        </div>
}