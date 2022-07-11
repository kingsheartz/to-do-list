import React, { useContext } from 'react'

import ThemeContext from '../../contexts/ThemeContext'
import FilterContext from '../../contexts/FilterContext'
import SelectFilter from '../selectFilter/SelectFilter'
import { Option } from '../../commons/styles/Style'
import { SearchDiv, SearchInputSelect } from './Style'


export default function SearchBox() {
  const { theme } = useContext(ThemeContext)
  const { group, setGroup } = useContext(FilterContext)
  return (
    <SearchDiv className='SearchDiv'>
      <SearchInputSelect
        title="Select Group"
        defaultValue={group}
        type="text"
        onChange={e => setGroup(e.target.value)}
        theme={theme}>
        <Option value="" disabled={true} theme={theme}>Select Group</Option>  
        <Option value="All" theme={theme}>All</Option>
        <SelectFilter />
      </SearchInputSelect>
    </SearchDiv>
  )
}
