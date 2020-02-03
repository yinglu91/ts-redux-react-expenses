import { Expense } from '../types/Expense';
import { ExpenseActions, ExpenseActionTypes } from '../types/actions';

const initialState: Expense[] = [];

// 5. Hook up types to Redux reducers

const expensesReducer = (state = initialState, action: ExpenseActions) => {
  switch (action.type) {
    case ExpenseActionTypes.addExpense:
      return [...state, action.payload];
    case ExpenseActionTypes.removeExpense:
      return state.filter(({ id }) => id !== action.payload);
    case ExpenseActionTypes.editExpense:
      return state.map(expense => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload
          };
        } else {
          return expense;
        }
      });
    case ExpenseActionTypes.setExpenses:
      return action.payload;
    default:
      return state;
  }
};

export default expensesReducer;
