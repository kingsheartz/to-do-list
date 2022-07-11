import styled from "styled-components"

export const FilterDiv = styled.div`
float:right;
position:absolute;
top:60px;
right:20px;
width:170px;
`

export const FilterInputSelect = styled.select`
right:10px !important;
padding:5px;
padding-right:0px;
width:140px;
background-color:transparent;
border:none;
border: ${props => props.theme["input-text-border-bottom"]}};
box-sizing: border-box;
color:${props => props.theme["input-text-font"]}};
transistion: 0.2s;
&:focus{
    outline:none;
    border-bottom:${props => props.theme["input-text-border-bottom-on-focus"]}};
}
`
export const FilterInputOption = styled.option`
background-color : ${props => props.theme["bg-color"]};
`

export const FilterButton = styled.button`
padding:6px;
width:30px;
border:none;
border:${props => props.theme["to-do-list-button-border"]};
background-color:${props => props.theme["to-do-list-button-bg-color"]};
color:${props => props.theme["to-do-list-button-font"]};
margin-top:40px;
font-weight:bold;
transition: .3s;
&:hover{
    background-color:${props => props.theme["to-do-list-button-bg-color-on-hover"]};
    border-color:${props => props.theme["to-do-list-button-border-on-hover"]};
    color:${props => props.theme["to-do-list-button-font-on-hover"]};
}
`