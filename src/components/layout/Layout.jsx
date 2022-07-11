import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";

import ThemeContext from '../../contexts/ThemeContext';
import { MainDiv, ContainerDiv } from './Style'
import ThemePicker from '../themePicker/ThemePicker';
import SideNav from '../sideNav/SideNav';


export default function Layout() {
  const { theme } = useContext(ThemeContext)

  return (
    <MainDiv theme={theme}>
      <ThemePicker />
      <ContainerDiv>
        <SideNav />
        <Outlet />
      </ContainerDiv>
    </MainDiv>
  )
}
