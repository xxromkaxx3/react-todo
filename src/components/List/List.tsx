import React from "react";
import {Todo} from '../../App';
import styled from "styled-components";
import { LiItem } from "./LiItem";


export type Props = {
    item: Todo[]
    butClick: (id:string) =>void
    liClick: (id:string) =>void
}
type TextProps = {
    selected: boolean
}
// const StyledLi = styled.li `
//     cursor: pointer;
//     display: inline;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     font-size: 20px;
// `
const StyledOl = styled.ol`
    min-height: 85vh;
    margin: 0;
    padding: 10px 0 10px 0;
`
// const Text = styled.a<TextProps>`
//     user-select: none;
//     text-decoration: ${props => props.selected? 'line-through' : 'none'};
// `



// const onMouseDownHandler = (e:MouseEvent<HTMLAnchorElement>)=>{
//     e.preventDefault()
// }



export const List: React.FC<Props> = ({item, butClick, liClick})=>{
    return <StyledOl>
        {item.map(val =><div key = {val.id}>
            <LiItem item={val} butClick={butClick} liClick={liClick}/>
            {/* <StyledLi>
            <Text selected = {val.completed} onClick={()=>liClick(val.id)}>{val.value}</Text>
            <button onClick={()=>butClick(val.id)} >X</button>
            </StyledLi>
            <br></br> */}
            </div>)}
    </StyledOl>
    
}