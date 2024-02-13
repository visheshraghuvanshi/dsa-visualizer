import './OneDArrays.css';
import { useState } from 'react';

function OneDArrays() {

  const [inputs, setInputs] = useState([]);

  const addInput = (event) => {
    event.preventDefault();
    const newInput = event.target.elements.input.value;
    if(newInput) {
      setInputs(prev => [...prev, newInput]);
      event.target.elements.input.value = ''; 
    } else {
      alert('Please enter a valid value');
    }
  }
  const clearArray = () => {
    if(window.confirm("Are you sure you want to clear?")) {
      setInputs([]);
    }
  }

  return (
    <div className="onedarrays">
      <h1>Single Dimension Arrays</h1>
      <div>
      <form onSubmit={addInput}>
        <input type="text" name="input" />
        <button>Add</button>
      </form>
      <button onClick={clearArray}>Clear Array</button> 

      <ul className='array'>
        {inputs.map(input => <li>{input}</li>)}
      </ul>
    </div>
    </div>

  );
}

export default OneDArrays;