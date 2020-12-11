import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE, SET_SMURF } from '../actions/action'

export const initialState = {
  isLoading: false,
  smurfData: [],
  error: '',
  newSmurf: {
    name: '',
    age: '',
    height: ''
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfData: action.payload
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case POST_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfData: action.payload
      }

    case POST_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case SET_SMURF:
      return { ...state, newSmurf: {
        name: action.payload,
        age: action.payload,
        height: action.payload.height
      }}
    
    default:
      return state;
  }
};