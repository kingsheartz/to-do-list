import styled from "styled-components"

export const ToDoListDiv = styled.div`
position:relative;
top:80px;
margin:auto;
width:95%;
`
export const ToDoListForm = styled.form`
background: ${props => props.theme["bg-color"]};
padding:20px;
width:100%;
box-sizing: border-box;
display:flex;
padding-top:60px;
`
export const ToDoListButton = styled.button`
padding:10px;
width:150px;
border-radius:3px;
border:none;
border:${props => props.theme["to-do-list-button-border"]};
background-color:${props => props.theme["to-do-list-button-bg-color"]};
color:${props => props.theme["to-do-list-button-font"]};
margin-top:40px;
margin-bottom:20px;
font-weight:bold;
transition: .3s;
&:hover{
    background-color:${props => props.theme["to-do-list-button-bg-color-on-hover"]};
    border-color:${props => props.theme["to-do-list-button-border-on-hover"]};
    color:${props => props.theme["to-do-list-button-font-on-hover"]};
}
`
export const ListDiv = styled.div`
width: 100%;
display:block;
`
