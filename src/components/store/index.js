import {createStore} from 'redux';

//const initialState = require('../data/data.json')

const INITIAL_STATE = {
    makeSelected: [],
}

function vehicles(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LIST_MAKE':
            return {...state, makeSelected: [...state.makeSelected, action.make ]}
            default:
                return state;
    }
    
}

const store = createStore(vehicles);

export default store;

  
