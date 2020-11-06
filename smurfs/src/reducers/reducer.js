import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions/action'

const initialState = {
  isLoading: false,
  smurfData: [],
  error: ''
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
    default:
      return state;
  }
};