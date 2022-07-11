import React, { useContext } from 'react'

import FilterContext from '../../../contexts/FilterContext'
import ListContext from '../../../contexts/ListContext'
import NonStrikedList from './tableList/listTypes/NonStrikedList'
import StrikedList from './tableList/listTypes/StrikedList'

export default function Data() {
  const { list, strikedList } = useContext(ListContext)
  const { filter } = useContext(FilterContext)

  return (
    <>
      {list.length > 0 &&
        <>
          {filter === "Incompleted" ? (
            <NonStrikedList />
          ) : null}
        </>
      }
      {strikedList.length > 0 &&
        <>
          {filter === "Completed" ? (
            <StrikedList />
          ) : null}
        </>
      }
      {(list.length > 0 || strikedList.length > 0) &&
        <>
          {(filter === "Default" || filter === "") ? (
            <>
              <NonStrikedList />
              <StrikedList index={list.length} />
            </>
          ) : null}
        </>
      }
    </>
  )
}
