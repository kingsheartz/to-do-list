import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../contexts/ThemeContext'
import ListContext from '../../contexts/ListContext'
import CheckBox from '../checkBox/CheckBox'
import { Tr, Td } from '../../commons/styles/Style'
import { CloseButton } from './Style'



export default function TableHelper(props) {
  const { theme } = useContext(ThemeContext)
  const { list, setList, strikedList, setStrikedList } = useContext(ListContext)

  const setCompleted = () => {
    if (props.element.isDeleted === false) {
      alert(`Hurray, '${list[props.index].name}' task is completed`)
      let date = new Date(Date.now()).toString();
      setStrikedList([...strikedList, { ...list[props.index], isDeleted: true, completedTime: date.slice(0, date.indexOf("GMT")) }])
      list.splice(props.index, 1)
      setList(list);
    }

    if (props.element.isDeleted === true) {
      alert(`Oops, '${strikedList[props.index].name}' task is rescheduled`)

      setList([...list, { ...strikedList[props.index], isDeleted: false, completedTime: "_" }])
      strikedList.splice(props.index, 1)
      setStrikedList(strikedList)
    }
  }

  const deleteFromList = () => {

    if (window.confirm(`Are you sure to delete the task '${props.element.name}'`)) {
      if (props.element.isDeleted) {
        strikedList.splice(props.index, 1)
        setStrikedList([...strikedList])
      }
      else {
        list.splice(props.index, 1)
        setList([...list])
      }
    }
  }

  return (

    <Tr theme={theme}
      className={`list-items table-data ${props.element.isDeleted}`}
      isDeleted={props.element.isDeleted}>
      <Td className={"list-item-hover"}
        onClick={setCompleted}>
        <CheckBox isDeleted={props.element.isDeleted} />
      </Td>
      <Td className='title'>
        {props.element.name}
      </Td>
      <Td className='group'>
        {props.element.group}
      </Td>
      <Td>{props.element.createdTime}</Td>
      <Td>{props.element.completedTime}</Td>
      <Td>
        <CloseButton
          type='button'
          onClick={deleteFromList}
          theme={theme}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </CloseButton>
      </Td>
    </Tr>
  )
}
