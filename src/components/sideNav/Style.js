import styled from "styled-components"

// Color
import { color } from "../../assets/design/Color";

export const SideNavbar = styled.nav`
left: 0px;
position: fixed;
z-index: 1;
top: 0px;
background: ${color["black-shadow-700"]};
width: 100%;
height: 38px;
display:flex;
justifyContent:flex-start;
alignItems:center;
`
export const NavButton = styled.button`
background: ${props => props.currentLocation === props.path ? color["star-command-blue"]:color["black-shadow-700"]};
float: left;
color: ${color["white"]};
marginLeft: 10px;
padding: 8px;
display: flex;
justifyContent: center;
alignItems: center;
&:hover{
  background-color: ${color["star-command-blue"]} !important;
}
`