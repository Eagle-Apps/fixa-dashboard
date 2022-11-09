const authReducer = (state = { profile: null }, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profile: action.payload.profile };
    default:
      return state;
  }
};

export default authReducer;
