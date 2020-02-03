import uuid from 'uuid';
import { Expense } from '../types/Expense';
import { AppState } from '../store/configureStore';
import { AppActions, ExpenseActionTypes } from '../types/actions';
import { Dispatch } from 'redux';

// 4. Hoop up types to Redux actions

export const addExpense = (expense: Expense): AppActions => ({
  type: ExpenseActionTypes.addExpense,
  payload: expense
});

export const removeExpense = (id: string): AppActions => ({
  type: ExpenseActionTypes.removeExpense,
  payload: id
});

export const editExpense = (expense: Expense): AppActions => ({
  type: ExpenseActionTypes.editExpense,
  payload: expense
});

export const setExpenses = (expenses: Expense[]): AppActions => ({
  type: ExpenseActionTypes.setExpenses,
  payload: expenses
});

export const startAddExpense = (expenseData: {
  description: string;
  note: string;
  amount: number;
  createdAt: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    dispatch(
      addExpense({
        id,
        ...expense
      })
    );
  };
};

export const startRemoveExpense = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (expense: Expense) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editExpense(expense));
  };
};

export const startSetExpenses = (expenses: Expense[]) => {
  //console.log(database);
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setExpenses(expenses));
  };
};
