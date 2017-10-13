import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
      <div className="widget-header">
        {props.options.length > 0 ? <h3 className="widget-header__title">Your Options</h3> : <h3 className="widget-header__title">No Options</h3>}
        <button
          className="button button--link"
          onClick={props.removeAll}
        >
          Remove All
        </button>
      </div>
      
      {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            removeSingle={props.removeSingle}
          />
        ))
      }
  </div>
);

export default Options;