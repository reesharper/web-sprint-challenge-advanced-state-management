import React from 'react';
import { postSmurfs, setSmurf, fetchSmurfs } from './actions/action';
import { connect } from 'react-redux';

const SmurfForm = (props) => {

  const onChange = (e) => {
    props.setSmurf(e.target.value);
    // console.log(props.setSmurf(e.target.value));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurfs(props.newSmurf);
    props.fetchSmurfs();
    console.log(props.newSmurf);
  } 

  return (
    <form>
    <label> Name: <input 
      value={props.name}
      name="name"
      type="text"
      onChange={onChange}
      /> </label> <br />

    <label> Age: <input 
      value={props.age}
      name="age"
      type="text"
      onChange={onChange}
      /> </label> <br />
      
    <label> Height: <input 
      value={props.height}
      name="height"
      type="text"
      onChange={onChange}
      /> </label> <br />

    <button onClick={handleSubmit}> ADD </button>
  </form>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.newSmurf.name,
    age: state.newSmurf.age,
    height: state.newSmurf.height,
    newSmurf: state.newSmurf
  };
};

export default connect(mapStateToProps, { postSmurfs, setSmurf, fetchSmurfs })(SmurfForm);