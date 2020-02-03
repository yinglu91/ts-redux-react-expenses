import { Expense } from './Expense';

/**
 * Action types
 */
export enum ExpenseActionTypes {
  addExpense,
  removeExpense,
  editExpense,
  setExpenses
}

export interface AddExpenseAction {
  type: ExpenseActionTypes.addExpense;
  payload: Expense;
}

export interface RemoveExpenseAction {
  type: ExpenseActionTypes.removeExpense;
  payload: string; // id
}

export interface EditExpenseAction {
  type: ExpenseActionTypes.editExpense;
  payload: Expense;
}

export interface SetExpensesAction {
  type: ExpenseActionTypes.setExpenses;
  payload: Expense[];
}

// export type AuthActions = RegistrationAction | LoginAction | LogoutAction
export type ExpenseActions =
  | AddExpenseAction
  | RemoveExpenseAction
  | EditExpenseAction
  | SetExpensesAction;

// export type AppActions = AuthActions | ExpenseActions; // if auth
export type AppActions = ExpenseActions;
