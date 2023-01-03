import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {
    candidatos: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getCandidatos":
            return { ...state, candidatos: action.payload};
        default:
            return state;
    }
  
}

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;