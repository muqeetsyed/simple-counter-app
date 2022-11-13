import React from 'react';


function Button({name, counterVariable, functionCounter}) {
  return (
    <div>
      <button type="button" className = "btn btn-outline-primary" onClick={ () => functionCounter(counterVariable)}>{name}</button>
    </div>
  )
}

export default Button

