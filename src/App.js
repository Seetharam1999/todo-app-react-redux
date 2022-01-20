import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {

  const [items, setItems] = useState([]);

  function addNote(item) {
    setItems((prevValue) => {
      return [
        ...prevValue, item
      ]
    })
  }

  function deleteNote(id) {
    setItems(() => {
      return items.filter((newItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
        <h1>To-Do List</h1>
      <Input onAdd={addNote}/> <br/>
      {
        items.map((newItem, index) => {
        return(
          <List 
            key={index}
            id={index}
            content= {newItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
  )
}

export default App;
