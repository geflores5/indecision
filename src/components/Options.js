import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
      {props.options.length > 0 ? 'Your options:' : 'No Options:'}
      <button
        className="button button--link"
        onClick={props.removeAll}
      >
        Remove All
      </button>
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

export default Options;