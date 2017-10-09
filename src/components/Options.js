import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
        {props.options.length > 0 ? 'Here are you options:' : 'No Options:'}
        <button onClick={props.removeAll}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              removeSingle={props.removeSingle}
            />
          ))
        }
    </div>
  );
}

export default Options;