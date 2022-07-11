import styled from "styled-components"
// Color
import { color } from "../../assets/design/Color";

export const ThemePickerDiv = styled.div`
position:fixed;
display:flex;
justify-content:center;
align-items:center;
font-size:14px;
color:white;
right:5px;
top:5px;
z-index:2;
`
export const ThemePickerContainerDiv = styled.div`
height:30px;
width:30px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
color:white;
font-size:16px;
background-color: ${color["black-shadow-700"]};
`
export const ThemeSelecterDiv = styled.div`
position:fixed;
right:3px;
top:40px;
width:36px;
border-radius:5px;
background-color:${color["black-shadow-200"]};
`
export const OptionDiv = styled.div`
background-color: ${props => props.theme === "light-theme" ? color.white : color.black};
width:30px;
height:30px;
margin:2px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
border:3px solid ${props => props.currentTheme === props.theme ? color.red : color.black} !important;
&:hover{
    border:3px solid ${color.red};
}
`