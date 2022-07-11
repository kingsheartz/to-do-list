import React, { useState, useContext } from 'react';

import ThemeContext from '../../contexts/ThemeContext'
import ListContext from '../../contexts/ListContext';
import FilterBox from '../../components/filterBox/FilterBox';
import SelectFilter from '../../components/selectFilter/SelectFilter';
import TableList from '../../components/list/data/tableList/TableList';
import { ParentDiv, ChildDiv, FormHeading, InputDiv, InputText, InputLabel, InputSelect, Option } from '../../commons/styles/Style'
import { ToDoListDiv, ToDoListForm, ToDoListButton, ListDiv } from './Style'



function ToDoList() {
  const { theme } = useContext(ThemeContext)
  const { list, setList } = useContext(ListContext)

  // Declare state variable
  const [data, setData] = useState({
    "name": "",
    "group": "",
    "createdTime": "",
    "completedTime": "_",
    "isDeleted": false,
  });

  //Validation and Listing
  const handleSubmit = () => {
    if (data.name === "" && data.group === "") {
      alert("Task and Group is empty");
      return;
    }
    if (data.group === "") {
      alert("Please select Group");
      return;
    }
    if (data.name === "") {
      alert("Task is empty");
      return;
    }
    let date = new Date(Date.now()).toString();
    setList([...list, { ...data, createdTime: date.slice(0, date.indexOf("GMT")) }]);
    setData({ ...data, name: "", group: "" })
  }

  return (
      <ToDoListDiv>
        <FilterBox />
        <ParentDiv className={"parent"}>
          <ChildDiv className={"child"} theme={theme} >
            <FormHeading theme={theme}>TO DO LIST</FormHeading>
            <ToDoListForm theme={theme} id={"to-do-list-form"} onSubmit={(e) => { e.preventDefault() }}>
              <InputDiv>
                <InputLabel
                  className={"label"}
                  theme={theme}>Task</InputLabel>
                <InputText
                  type="text"
                  name={"group"}
                  id={"input-task"}
                  value={data.name}
                  onChange={e => { setData({ ...data, name: e.target.value }) }}
                  theme={theme} />
              </InputDiv>

              <InputDiv>
                <InputLabel
                  className={"label"}
                  theme={theme}>Group</InputLabel>
                <InputSelect
                  name={"group"}
                  value={data.group}
                  onChange={e => setData({ ...data, group: e.target.value })}
                  theme={theme}>
                  <Option disabled={true} value="" theme={theme}>Select</Option>
                  <SelectFilter />
                </InputSelect>
              </InputDiv>

              <ToDoListButton
                type='button'
                theme={theme}
                onClick={(e) => handleSubmit(e)}>ADD</ToDoListButton>
            </ToDoListForm>
          </ChildDiv>
        </ParentDiv>
        <ListDiv>
          <TableList />
        </ListDiv>
      </ToDoListDiv>
  )
}

export default ToDoList;