//initial state
const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};
//reducer function
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
export default customerReducer;
// action creator
export const createAccount = (fullName, nationalId) => {
  return {
    type: 'customer/createAccount',
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};
//action creator
export const updateName = (fullName) => {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
};
