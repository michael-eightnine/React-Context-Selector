import { useReducer } from "react";

type State = Record<string, any>;
type Action = {
  type: 'merge';
  payload?: State;
}


export function mergeReducer(state: State = {}, action: Action): State {
  switch(action?.type) {
    case 'merge':
      return {...state, ...(action?.payload || {})}
    default:
      return state
  }
}

/*
  A hook for maintaining state represented as an object.
  Useful when refactoring existing class based components.
  Returns [state, setState] similar to the useState hook.

  Example:

  const [state, setState] = useObjectState({ visible: true, message: 'a message' });
  setState({ message: 'a second message' });
  console.log(state) => { visible: true, message: 'a second message ' }
*/
export function useObjectState(initialState: State = {}) {
  return useReducer(mergeReducer, initialState);
}
