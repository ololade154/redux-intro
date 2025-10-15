import { combineReducers, createStore } from 'redux';
//initial value of the state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};
const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};
//reducer function
function accountReducer(state = initialStateAccount, action) {
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
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case 'customer/createAccount':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};
//redux store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
// store.dispatch({ type: 'account/deposite', payload: 500 });
// console.log(store.getState());
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: {
//     amount: 1000,
//     purpose: 'Buy a car',
//   },
// });
// console.log(store.getState());
//
// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());
// function deposite(){
//
// }
//action creator
const deposite = (amount) => {
  return {
    type: 'account/deposite',
    payload: amount,
  };
};
store.dispatch(deposite(500));
console.log(store.getState());

const withdraw = (amount) => {
  return {
    type: 'account/withdraw',
    payload: amount,
  };
};
store.dispatch(withdraw(200));
console.log(store.getState());
const requestLoan = (amount, purpose) => {
  return {
    type: 'account/requestLoan',
    payload: {
      amount,
      purpose,
    },
  };
};
store.dispatch(requestLoan(1000, 'buy a shoe'));
console.log(store.getState());
const payLoan = () => {
  return { type: 'account/payLoan' };
};
store.dispatch(payLoan());
console.log(store.getState());
const createAccount = (fullName, nationalId) => {
  return {
    type: 'customer/createAccount',
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};
const updateName = (fullName) => {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
};
store.dispatch(createAccount('ololade', '1234'));
console.log(store.getState());
