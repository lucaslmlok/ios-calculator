import { createContext, useContext, useReducer, FC, Dispatch } from 'react';
import { reducer, initialState, State, Action } from './reducer';

interface Props {
  children: React.ReactNode;
}

export const StateContext = createContext<State>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => null);

export const useCal = () => useContext(StateContext);
export const useCalDispatch = () => useContext(DispatchContext);

const Provider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;
