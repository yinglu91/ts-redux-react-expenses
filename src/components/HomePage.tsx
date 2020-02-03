import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import expenses from '../reducers/expenses';
import { Expense } from '../types/Expense';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { bindActionCreators } from 'redux';

// 8. Hook up types to React Component and mapStateToProps/mapDispatchToProps
// last step ! fun part !

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {}

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

export class HomePage extends React.Component<Props, HomePageState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  expenses: Expense[];
}

interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
