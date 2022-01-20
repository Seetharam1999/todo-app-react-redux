import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const List = (props) => {


  return <div>
      <ul style ={{listStyle:'none'}}>
        <div>
            <li>
                <p><Checkbox {...label} size="small" />Completed</p>
                {props.content}
                <p><button onClick={() => {props.onDelete(props.id)}}>Delete</button></p> <br/>
            </li>
        </div>
      </ul>
  </div>;
};

export default List;
