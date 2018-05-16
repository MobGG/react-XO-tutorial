import React from 'react';
import '../index.css';

// Class Square(classic component) => func Square(functional component)

// functional component 
// 1 stateless(no state)
// state should be managed by higher-level “container” components, or via Flux/Redux/etc so Square no need state
// 2 no lifecycle methods
function Square(props) {
  return (
    // props.onClick not a func
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;