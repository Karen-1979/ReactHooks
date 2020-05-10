const initState = {
  authError: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup succes");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signin error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default AuthReducer;
