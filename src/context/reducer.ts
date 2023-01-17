import { actions } from './actions';

type Operator = '+' | '-' | '*' | '/';

export interface State {
  display: string;
  operand: number | null;
  operator: Operator | null;
}

export interface Action {
  type: string | null;
  payload: string;
}

export const initialState: State = {
  display: '0',
  operand: null,
  operator: null,
};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case actions.NUMBER:
      if (state.display.length >= 10) {
        return state;
      }
      return {
        ...state,
        display: state.display === '0' ? payload : state.display + payload,
      };
    case actions.DECIMAL:
      return {
        ...state,
        display: state.display.includes('.')
          ? state.display
          : state.display + '.',
      };
    case actions.PLUS_MINUS:
      return {
        ...state,
        display: String(Number(state.display) * -1),
      };
    case actions.PERCENT:
      return {
        ...state,
        display: String(Number(state.display) / 100),
      };
    case actions.OPERATOR:
      let operator = payload;
      if (operator === 'x') {
        operator = '*';
      }
      if (operator === '÷') {
        operator = '/';
      }
      return {
        ...state,
        operand: Number(state.display),
        operator: operator as Operator,
        display: '0',
      };
    case actions.EQUALS:
      if (state.operand === null || state.operator === null) {
        return state;
      }
      return {
        ...state,
        operand: null,
        operator: null,
        display: String(
          eval(`${state.operand} ${state.operator} ${Number(state.display)}`)
        ),
      };
    case actions.CLEAR:
      if (payload === 'AC') {
        return initialState;
      }
      return {
        ...state,
        display: '0',
      };
    default:
      throw new Error(`Unknown action: ${type}`);
  }
};
