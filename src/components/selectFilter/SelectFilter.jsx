import React, { useContext } from 'react'

import ThemeContext from '../../contexts/ThemeContext'
import { SearchInputOption } from './Style'
import { filterData } from '../../assets/data/FilterData'

export default function SelectFilter() {
  const { theme } = useContext(ThemeContext)

  return (
    filterData.map((filterItem, index) => (
      <SearchInputOption
        key={index}
        theme={theme}
        value={filterItem}>
        {filterItem}
      </SearchInputOption>
    )
    )

  )
}
