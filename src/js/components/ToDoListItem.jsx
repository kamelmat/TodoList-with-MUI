import { useState } from "react"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};


const ToDoListItem = () => {

  const [inputValue, setInputValue] = useState('')
  const [listItems, setListItems] = useState([
    { liKey: 0, content: "Make the bed" },
    { liKey: 1, content: "Wash my hand" },
    { liKey: 2, content: "Eat" },
    { liKey: 3, content: "Walk the dog" }
  ]);

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTask = {
        liKey: Date.now(),
        content: inputValue
      }
      setListItems([...listItems, newTask]);
      setInputValue('')
    }
  }

  const handleDelete = (index) => {
    Swal.fire({
      title: "Do you want to errase this task?",
      showDenyButton: true,
      confirmButtonText: "Accept",
      denyButtonText: `Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = listItems.filter((_, i) => i !== index);
        setListItems(newList);
      } else if (result.isDenied) {
        Swal.fire("You didn't delete any tasks", "", "info");
      }
    });
  };

  return (
    <div className='container-fluid p-2'>
      <List sx={style} style={{ margin: "auto" }}>
        <ListItem>
          <input placeholder={listItems.length === 0 ? "Add a task, we are empty" : "What needs to be done?"} type="text"
            value={inputValue}
            onChange={changeInputValue}
            onKeyDown={handleKeyDown}
            style={{ border: "none", outline: "none" }} />
        </ListItem>
        <Divider component="li" />
        {listItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() => handleDelete(index)}>
              {listItems[index].content}
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

export default ToDoListItem