import { createStore} from 'redux';

const initialState = {
  count: 3
};

const reducer = (state = initialState, action) =>{
  console.log('reducer running', action);
  return state;
}

const store = createStore(reducer);

//.createContext(reducer)

export default store;
