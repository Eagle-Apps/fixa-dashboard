const fakeuser = {
  name: "Unsigned This-user",
  email: "unsigneduser@signinplease.com",
  phone: "0909292882",
  address: "023 unsigned inn str,logtown",
  city: "somewhere",
  state: "AST",
  zipCode: "zippy019",
};
const clientReducer = (state = { profile: fakeuser || null }, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profile: action.payload.profile };
    default:
      return state;
  }
};

export default clientReducer;
