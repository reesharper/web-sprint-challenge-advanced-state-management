import "./App.css";
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import SmurfForm from './smurfForm';
import { fetchSmurfs, postSmurfs } from '../actions/action'

const App = (props) => {

  useEffect(() => {
    props.fetchSmurfs();
  }, [])

  // useEffect(() => {
  //   props.postSmurfs();
  // }, [])

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <SmurfForm />
      <div className='smurfs'>
      {props.isLoading ? <p>Loading jokes...</p> : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.smurfs.map((smurf) => (
        <div className='smurf'>
          <h3>{smurf.name}</h3>
          <h4> {smurf.age} </h4>
          <h5> {smurf.height} </h5>
        </div>
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfData,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(App);
