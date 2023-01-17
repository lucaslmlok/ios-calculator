export const actions = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  EQUALS: 'equals',
  CLEAR: 'clear',
  DECIMAL: 'decimal',
  PLUS_MINUS: 'plus-minus',
  PERCENT: 'percent',
};

export const getActions = (text: string) => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return actions.NUMBER;
    case '+':
    case '-':
    case 'x':
    case '÷':
      return actions.OPERATOR;
    case '=':
      return actions.EQUALS;
    case 'C':
    case 'AC':
      return actions.CLEAR;
    case '.':
      return actions.DECIMAL;
    case '+/-':
      return actions.PLUS_MINUS;
    case '%':
      return actions.PERCENT;
    default:
      return null;
  }
};
