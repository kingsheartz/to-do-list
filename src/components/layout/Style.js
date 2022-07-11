import styled from "styled-components"

export const MainDiv = styled.div`
background: url(${props => props.theme["bg-img"]}) repeat;
background-size: cover;
height: 100%;
width:100%;
overflow-y:auto;
`
export const ContainerDiv = styled.div`
width:100%;
height: 100%;
border-radius:8px;
`