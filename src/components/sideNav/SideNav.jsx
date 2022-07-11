import React from 'react'
import { Link, useLocation } from "react-router-dom";

import routes from '../../assets/data/RouteData';
import { SideNavbar, NavButton } from './Style'

export default function SideNav() {

  let location = useLocation();
  return (
    <SideNavbar>
      {routes.map((route) => (

        <Link to={route.url} style={{
          color: "white",
          textDecoration: "none"
        }}>
          <NavButton
            key={route.name}
            currentLocation={location.pathname}
            path={route.url}
            type='button'>
            {route.name}
          </NavButton>
        </Link>
      ))}
    </SideNavbar>
  )
}
