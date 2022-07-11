import styled from "styled-components"

export const CloseButton = styled.button`
width:15px;
height:15px;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
padding:10px;
text-align:center;
background-color:${props => props.theme["table-del-btn-bg"]};
color:${props => props.theme["table-del-btn-color"]}; 
border:none;
&:hover { 
    background-color:red;
    color:white;
}
`