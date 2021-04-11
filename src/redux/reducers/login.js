import users from "../../data/Users.json" 

//Login Status
export const status = {
  INITIAL:  0,
  SUCCESS: 1,
  FAILED: 2
}

//Type
const LOGIN = 'login';
const SET_USERNAME = 'set-username';
const SET_PASSWORD = 'set-password';
const RESET = 'reset';

//default
const initialState = {
    users,
    status: status.INITIAL,
    username: '',
    password: '',
}

//Action creator
export const attemptLogin = () => ({type:  LOGIN, status});
export const resetStatus = () => ({type:  RESET, status});
export const setUsername = username => ({type: SET_USERNAME, username});
export const setPassword = password => ({type: SET_PASSWORD, password});

export default (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
        const matchUser = state.users
              .filter(x => x.username == state.username && x.password == state.password)

        const status = matchUser.length > 0 ? action.status.SUCCESS : action.status.FAILED

      return {
        ...state,
        status
      };

    case RESET:
      
    return {
        ...state,
        status: action.status.INITIAL
      };
    case SET_USERNAME:

      return {
        ...state,
        username: action.username
      };
    case SET_PASSWORD:

        return {
          ...state,
          password: action.password
        };
    default:
      return state;
  }
};
