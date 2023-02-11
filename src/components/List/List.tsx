import React from "react";
import {Todo} from '../../App';
import styled from "styled-components";
import { LiItem } from "./LiItem";
import { OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {ScrollbarsVisibilityBehavior, ScrollbarsAutoHideBehavior} from 'overlayscrollbars'


export type Props = {
    item: Todo[]
    butClick: (id:string) =>void
    liClick: (id:string) =>void
}


type ScrollType = {
    scrollbars:{
        visibility:ScrollbarsVisibilityBehavior 
        autoHide:ScrollbarsAutoHideBehavior 
    }
}

const scrollOptions:ScrollType = {
    scrollbars: {
        visibility: 'auto',
        autoHide: 'scroll'
    }
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
    height: 80vh;
    margin: 0;
    padding: 10px 20px 10px 15px;
`

// const Text = styled.a<TextProps>`
//     user-select: none;
//     text-decoration: ${props => props.selected? 'line-through' : 'none'};
// `


// const onMouseDownHandler = (e:MouseEvent<HTMLAnchorElement>)=>{
//     e.preventDefault()
// }



export const List: React.FC<Props> = ({item, butClick, liClick})=>{


    
    return <OverlayScrollbarsComponent defer 
    options = {scrollOptions} >
        <StyledOl>
            {item.map(val =>
                <LiItem key = {val.id} item={val} butClick={butClick} liClick={liClick}/>
                // <StyledLi>
                // <Text selected = {val.completed} onClick={()=>liClick(val.id)}>{val.value}</Text>
                // <button onClick={()=>butClick(val.id)} >X</button>
                // </StyledLi>
                // <br></br> 
                )}
        </StyledOl>
    </OverlayScrollbarsComponent>
}
