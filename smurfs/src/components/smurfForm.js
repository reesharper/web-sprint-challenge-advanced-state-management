import React, { useReducer } from 'react';
import { postSmurfs, setSmurf } from '../actions/action';
import { reducer, initialState } from '../reducers/reducer'

const SmurfForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSmurfs(state.smurfData))
  } 

  const onChange = (e) => {
    dispatch(setSmurf(e.target.value))
  }

  return (

    <form>

    <label>
      Name: 
      <input 
      value={state.newSmurf.name}
      name="name"
      type="text"
      onChange={onChange}
      />
    </label>
      <br />
    <label>
      Age:
      <input 
      value={state.newSmurf.age}
      name="age"
      type="text"
      onChange={onChange}
      />
    </label>
      <br />
    <label>
      Height:
      <input 
      value={state.newSmurf.height}
      name="height"
      type="text"
      onChange={onChange}
      />
    </label>
      <br />
    <button onClick={handleSubmit}> ADD </button>

  </form>

  );
};

export default SmurfForm;