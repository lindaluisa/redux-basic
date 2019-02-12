// Actions
interface Action {
  type: string;
  payload?: any;
}

/* const incrementAction: Action = {
  type: 'Increment'
} */

function reducer(state = 10, action: Action) {
  if ( action.type === 'Increment') {
    return state += 1;
  }

  return state
}

// Reducer
const incrementAction: Action = {
  type: 'Increment'
}

console.log( reducer(10, incrementAction ));