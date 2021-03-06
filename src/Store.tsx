import React, { createContext, useReducer, useContext } from 'react';
// from app
import Reducer, { State, Action } from 'Reducer';

const initialState: State = {
  isStart: false,
  components: [],
  footerSumbit: {
    caption: 'Submit',
    background: '#6200EE',
    color: '#F7F7F7'
  },
  maxId: 0
};

const StoreContext = createContext<State>(initialState);
const DispatchContext = createContext<React.Dispatch<Action>>(() => true);

/** Provider */
const Provider = (props: any) => {
  const { children } = props;

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

const useDispatch = () => {
  return useContext(DispatchContext);
};

const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(StoreContext);

  return state[property];
};

export { StoreContext, DispatchContext, Provider, useDispatch, useGlobalState };
