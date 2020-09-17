export const initialState = {
  user: {},
  loading: true,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
