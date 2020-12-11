import axios from "axios";
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";
export const SET_SMURF_NAME = "SET_SMURF_NAME";
export const SET_SMURF_AGE = "SET_SMURF_AGE";
export const SET_SMURF_HEIGHT = "SET_SMURF_HEIGHT";



export const fetchSmurfs = () => {

  return (dispatch) => {
    dispatch({ type: FETCH_SMURF_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message });
      });
  };
};

export const postSmurfs = (newSmurf) => {

  return (dispatch) => {
    dispatch({ type: POST_SMURF_START });

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
        console.log(res.data)
      })
      .catch((err) => {
        dispatch({ type: POST_SMURF_FAILURE, payload: err.message});
      });
  };
};

export const setSmurfName = (smurf) => {
  return ({type: SET_SMURF_NAME, payload:smurf})
}

export const setSmurfAge = (smurf) => {
  return ({type: SET_SMURF_AGE, payload:smurf})
}

export const setSmurfHeight = (smurf) => {
  return ({type: SET_SMURF_HEIGHT, payload:smurf})
}