import { createStore } from 'redux';
//initial value of the state
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};
//reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposite':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpse: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
//redux store
const store = createStore(reducer);
store.dispatch({ type: 'account/deposite', payload: 500 });
console.log(store.getState());
store.dispatch({
  type: 'account/requestLoan',
  payload: {
    amount: 1000,
    purpose: 'Buy a car',
  },
});
console.log(store.getState());

store.dispatch({ type: 'account/payLaon' });
console.log(store.getState());
