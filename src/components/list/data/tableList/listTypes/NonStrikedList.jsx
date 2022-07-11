import React, { useContext } from 'react'

import FilterContext from '../../../../../contexts/FilterContext'
import ListContext from '../../../../../contexts/ListContext';
import TableHelper from '../../../../tableHelper/TableHelper';

export default function NonStrikedList() {
  const { list } = useContext(ListContext)
  const { group } = useContext(FilterContext)

  return (
    list
      .map((element, index) => {
        if (group === "" || group === "All") {
          return (
            <TableHelper
              key={element.createdTime}
              index={index}
              tableIndex={index}
              element={element}
            />
          )
        }
        if (element.group === group) {
          return (
            <TableHelper
              key={element.createdTime}
              index={index}
              tableIndex={index}
              element={element}
            />
          )
        }
        return null;
      })
  )
}
