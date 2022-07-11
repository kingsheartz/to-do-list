import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../contexts/ThemeContext'
import FilterContext from '../../contexts/FilterContext';
import { FilterDiv, FilterInputSelect, FilterButton } from './Style'
import { Option } from '../../commons/styles/Style';

export default function FilterBox() {
  const { theme } = useContext(ThemeContext)
  const { filter, setFilter } = useContext(FilterContext)

  return (
    <FilterDiv className='FilterDiv'>
      <FilterInputSelect
        title="Select Task status"
        defaultValue={filter}
        type="text"
        onChange={e => setFilter(e.target.value)}
        theme={theme}>
        <Option value="" disabled={true} theme={theme}>Select Task status</Option>
        <Option value="Default" theme={theme}>All</Option>
        <Option value="Completed" theme={theme}>Completed</Option>
        <Option value="Incompleted" theme={theme}>Incompleted</Option>
      </FilterInputSelect>
      <FilterButton
        type='button'
        theme={theme}>
        <FontAwesomeIcon icon={faFilter} />
      </FilterButton>
    </FilterDiv >
  )
}
