import React, { useState } from 'react';

const Input = (props) => {

    const [item, setItem] = useState({
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setItem((prevValue) => {
           return {
               ...prevValue,
               [name]: value
           }
        })

    }

    function handleNote() {
        props.onAdd(item);
        setItem(() => {
            return {
                content: "" 
            }
        })
    }

  return <div>
      <input name="content" value={item.content} onChange={handleChange}/>
      <button onClick={handleNote}>Add!</button>
  </div>;
};

export default Input;

