import React from "react";
import styled from "styled-components";
import { LiItem } from "./LiItem";
import { OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {ScrollbarsVisibilityBehavior, ScrollbarsAutoHideBehavior} from 'overlayscrollbars'
import { useTypedSelector } from "../../redux/hooks";


export type Props = {
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


const StyledOl = styled.ol`
    height: 80vh;
    margin: 0;
    padding: 10px 20px 10px 15px;
`

export const List: React.FC<Props> = ()=>{
    const {list} = useTypedSelector(state => state.reducer)

    return <OverlayScrollbarsComponent defer 
    options = {scrollOptions} >
        <StyledOl>
            {list.map(val =><LiItem key = {val.id} item={val}/>)}
        </StyledOl>
    </OverlayScrollbarsComponent>
}
