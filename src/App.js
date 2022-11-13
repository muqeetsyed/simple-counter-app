
import Button from './Component/Button.js';
import {useState} from 'react';

function App() {
  const [counter,setCounter] = useState(0);
 
  function changeCounter(count){
    if(count < 0){
      return;
    }
    setCounter(count);
  }
  
  return (
      <div className="card text-center col-sm-6 mx-auto mt-5">
        <div className="card-header">
            <h1> {counter} </h1>
        </div>  
        <div className="btn-toolbar card-body btn-group mx-auto" role="toolbar">
          <Button name = "Increment" counterVariable = {counter + 1} functionCounter = {changeCounter}/>
          <Button name = "Decrement" counterVariable = {counter - 1} functionCounter = {changeCounter}/>
          <Button name = "Reset" counterVariable = {counter - counter} functionCounter = {changeCounter}/>
        </div>
        <div className='card-footer'>
            <span style={{color : "green"}}>SIMPLE COUNTER APPLICATION</span>
        </div>
      </div>
  );
}

export default App;
