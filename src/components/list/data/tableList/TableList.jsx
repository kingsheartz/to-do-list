import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import ThemeContext from '../../../../contexts/ThemeContext'
import ListContext from '../../../../contexts/ListContext'
import FilterContext from '../../../../contexts/FilterContext';
import SearchBox from '../../../searchBox/SearchBox';
import Data from '../Data'
import { Table, Tbody, Tr, Th } from '../../../../commons/styles/Style'

export default function List() {

  const { theme } = useContext(ThemeContext)
  const { list, setList, strikedList, setStrikedList } = useContext(ListContext)
  const { group, filter } = useContext(FilterContext)

  const deleteAll = () => {
    if (window.confirm(`Are you sure to delete all the tasks`)) {
      let dummyList = [];
      if (group === "" || group === "All") {
        //Case 1 : If all groups are selected & default filter
        if (filter === "" || filter === "Default") {
          alert("case 1")
          setList([]);
          setStrikedList([]);
        }
        //Case 2 : If all groups are selected & set filter Completed
        if (filter === "Completed") {
          alert("case 2")
          setStrikedList([])
        }
        //Case 3 : If all groups are selected & set filter Incompleted
        if (filter === "Incompleted") {
          alert("case 3")
          setList([])
        }
      }
      else {
        //Case 4 : If a group is selected & default filter
        if (filter === "" || filter === "Default") {
          alert("case 4")
          dummyList = [];
          list
            .filter((item => item.group !== group))
            .map((item) => dummyList.push(item))
          setList(dummyList)

          dummyList = [];
          strikedList
            .filter((item => item.group !== group))
            .map((item) => dummyList.push(item))
          setStrikedList(dummyList)
        }
        //Case 5 : If a group is selected & set filter Completed
        if (filter === "Completed") {
          alert("case 5")
          dummyList = [];
          strikedList
            .filter((item => item.group !== group))
            .map((item) => dummyList.push(item))
          setStrikedList(dummyList)
        }
        //Case 6 : If a group is selected & set filter Incompleted
        if (filter === "Incompleted") {
          alert("case 6")
          dummyList = [];
          list
            .filter((item => item.group !== group))
            .map((item) => dummyList.push(item))
          setList(dummyList)
        }
      }
    }
  }
  if (list.length !== 0 || strikedList.length !== 0) {
    return (
      <Table theme={theme}>
        <Tbody>
          <Tr>
            <Th theme={theme}>
              <FontAwesomeIcon
                title="Check or Uncheck"
                icon={faListCheck}>
              </FontAwesomeIcon>
            </Th>
            <Th
              title="Tasks"
              theme={theme}>
              Tasks
            </Th>
            <Th
              title="Select Group"
              theme={theme}>
              <SearchBox />
            </Th>
            <Th
              title="Created Time"
              theme={theme}>
              Created Time
            </Th>
            <Th
              title="Completed Time"
              theme={theme}>
              Completed Time
            </Th>
            <Th theme={theme}>
              <FontAwesomeIcon
                icon={faTrash}
                title="Delete"
                onClick={deleteAll}>
              </FontAwesomeIcon>
            </Th>
          </Tr>
          <Data />
        </Tbody>
      </Table>
    )
  }
}
