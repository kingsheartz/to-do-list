// Stylesheet
import styled from "styled-components"
// Font
import { Font } from "../../assets/design/Font";
// Color
import { color } from "../../assets/design/Color";

// Div
export const ParentDiv = styled.div`
border-radius:8px;
border-bottom-right-radius:0px;
border-bottom-left-radius:0px;
height:100%;
width:99.6%;
margin:auto;
overflow:hidden;
box-shadow:
inset 0 -3em 3em ${color["black-shadow-100"]},
      0 0  0 2px ${color.white},
      0.3em 0.3em 1em ${color["black-shadow-300"]};
`
export const ChildDiv = styled.div`
width:100%;
height:100%;
box-sizing: border-box;
`
export const FormHeading = styled.h2`
background: ${props => props.theme["form-bg"]};
color:${props => props.theme["form-heading"]};
padding:20px;
margin:auto;
width:100%;
box-sizing: border-box;
`
// Input
export const InputDiv = styled.div`
margin-right:5px;
padding: 10px;
width:100%;
position: relative;
box-sizing: border-box;
`
export const InputLabel = styled.label`
display: block;
color:${props => props.theme["input-label"]};
float:left;
font-size:14px;
box-sizing: border-box;
padding:8px;
padding-left:0px;
font-family:${Font["input-label"]};
`
export const InputText = styled.input`
right:10px !important;
padding:5px;
width:100%;
background-color:transparent;
border:none;
border-bottom: ${props => props.theme["input-text-border-bottom"]}};
box-sizing: border-box;
color:${props => props.theme["input-text-font"]}};
transistion: 0.2s;
&:focus{
    outline:none;
    border-bottom:${props => props.theme["input-text-border-bottom-on-focus"]}};
}
`
export const InputSelect = styled.select`
right:10px !important;
padding:5px;
width:100%;
background-color:transparent;
border:none;
border-bottom: ${props => props.theme["input-text-border-bottom"]}};
box-sizing: border-box;
color:${props => props.theme["input-text-font"]}};
transistion: 0.2s;
&:focus{
    outline:none;
    border-bottom:${props => props.theme["input-text-border-bottom-on-focus"]}};
}
`
export const InputSelectOption = styled.option`
background-color : ${props => props.theme["bg-color"]} !important;
`
export const Option = styled.option`
background-color : ${props => props.theme["bg-color"]} !important;
color:${props => props.theme["input-text-font"]}};
`
export const Checkbox = styled.input`
`
// Table
export const Table = styled.table`
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
`
export const Thead = styled.thead`
width:100%;
display:block;
`
export const Tbody = styled.tbody`
width:100%;
display:block;
height: 300px;
overflow-y: auto;
`
export const Tr = styled.tr`
text-align:center;
width:100%;
color:${props => props.theme["table-font"]};
&:nth-child(even){
    background:${props => props.theme["tr-even-bg"]};
}
&:nth-child(odd){
    background:${props => props.theme["tr-odd-bg"]};
}
&:hover{
    background-color:${props => props.theme["tr-bg"]} !important;
}
`
export const Th = styled.th` 
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
font-size:15px;
background-color: ${props => props.theme["th-bg"]};
color: ${props => props.theme["th-font"]};
border: 1px solid ${color.gainsboro};
padding: 8px;
position:relative;
&:nth-child(1){
    width:5%;
}
&:nth-child(2){
    width:30%;
}
&:nth-child(3){
    width:15%;
}
&:nth-child(4){
    width:25%;
}
&:nth-child(5){
    width:25%;
}
&:nth-child(6){
    width:10%;
}
`
export const Td = styled.td`
border: 1px solid ${color.gainsboro};
padding: 8px;
font-size:14px;
&:nth-child(1){
    width:5%;
}
&:nth-child(2){
    width:25%;
}
&:nth-child(3){
    width:10%;
}
&:nth-child(4){
    width:25%;
}
&:nth-child(5){
    width:25%;
}
&:nth-child(6){
    width:10%;
}
`

