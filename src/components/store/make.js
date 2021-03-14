// import api from '../Api'
// const axios = require('axios')

// const FETCH_MAKE_STARTED = 'make/fetchStarted';
// const FETCH_MAKE_SUCCESS = 'make/fetchSuccess';
// const FETCH_MAKE_ERROR = 'make/fetchError';

// const fetchMakeStarted = () => ({
//   type: FETCH_MAKE_STARTED,
// });

// const fetchMakeSuccess = (data) => ({
//   type: FETCH_MAKE_SUCCESS,
//   payload: data,
// });

// const fetchMakeError = (error) => ({
//   type: FETCH_MAKE_ERROR,
//   payload: error,
// });

// const initialState = {
//   ID: 0,
//   Name: "",  
//   data: null,
//   error:null
// };

// export default function make(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_MAKE_STARTED:
//       return {
//         ...state,
       
//         data: null,
//         error: null,
//       };
//     case FETCH_MAKE_SUCCESS:
//       return {
//         ...state,
//         ID: 0,
//         Name: "",
//         data: action.payload,
//         error: null,
//       };
//     case FETCH_MAKE_ERROR:
//       return {
//         ...state,
             
//         error: action.payload,
//         data: null,
//       };
//     default:
//       return state;
//   }
// }

// export const fetchMake = () => async (dispatch) => {
//   try {
//     dispatch(fetchMakeStarted());
//     const  url = api.get('api/OnlineChallenge/Make');
//     const response = await (url);
//     const data = await response.json();
//     dispatch(fetchMakeSuccess(data));
//   } catch (error) {
//     dispatch(fetchMakeError(error));
//   }
// };