let redux = require('redux');

console.log("--- REDUX-EXAMPLE : START -----------");

let defaultState = {
  arrNote: ['Android', 'iOS', 'Nodejs'],
  isAdding: false
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding};
  
    default:
      return state;
  }
}

let store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'TOGGLE_IS_ADDING'});
console.log(store.getState());

console.log("--- REDUX-EXAMPLE : END   -----------");