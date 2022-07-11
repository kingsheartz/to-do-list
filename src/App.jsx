import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import './style.css';
import { Theme } from './assets/design/Theme';
import ThemeContext from './contexts/ThemeContext';
import ListContext from './contexts/ListContext';
import FilterContext from './contexts/FilterContext';
import Layout from './components/layout/Layout';
import NavigationConfig from './config/navigation/NavigationConfig';

const Router = [];
NavigationConfig.forEach((route, index) => {
  Router.push(
    <Route
      key={index}
      path={route.path}
      element={<route.component />}
    />
  )
})

function App() {
  const [theme, setTheme] = useState(Theme['light-theme']);
  const [showThemeSelecter, setShowThemeSelecter] = useState(false)
  const currentTheme = { theme, setTheme, showThemeSelecter, setShowThemeSelecter }

  const [list, setList] = useState([]);
  const [strikedList, setStrikedList] = useState([]);
  const lists = { list, setList, strikedList, setStrikedList };

  const [filter, setFilter] = useState("");
  const [group, setGroup] = useState("");
  const filters = { filter, setFilter, group, setGroup };


  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeContext.Provider value={currentTheme}>
        <ListContext.Provider value={lists}>
          <FilterContext.Provider value={filters}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />}>
                  {Router}
                </Route>
              </Routes>
            </BrowserRouter>
          </FilterContext.Provider>
        </ListContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
