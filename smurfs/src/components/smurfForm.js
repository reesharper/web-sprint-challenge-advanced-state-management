import React from 'react';
import { postSmurfs, setSmurfName, setSmurfAge, setSmurfHeight, fetchSmurfs } from './actions/action';
import { connect } from 'react-redux';

const SmurfForm = (props) => {

  const onChangeName = (e) => {
    props.setSmurfName(e.target.value);
    console.log(props.setSmurfName(e.target.value));
  }

  const onChangeAge = (e) => {
    props.setSmurfAge(e.target.value);
    console.log(props.setSmurfAge(e.target.value));
  }

  const onChangeHeight = (e) => {
    props.setSmurfHeight(e.target.value);
    console.log(props.setSmurfHeight(e.target.value));
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
      onChange={onChangeName}
      /> </label> <br />

    <label> Age: <input 
      value={props.age}
      name="age"
      type="text"
      onChange={onChangeAge}
      /> </label> <br />
      
    <label> Height: <input 
      value={props.height}
      name="height"
      type="text"
      onChange={onChangeHeight}
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

export default connect(mapStateToProps, { postSmurfs, setSmurfName, setSmurfAge, setSmurfHeight, fetchSmurfs })(SmurfForm);