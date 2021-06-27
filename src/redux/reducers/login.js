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
const UPDATE_NAME = 'update-name';

//default
const initialState = {
    users,
    status: status.INITIAL,
    username: '',
    password: '',
    user: {}
}

//Action creator
export const attemptLogin = () => ({type:  LOGIN, status});
export const resetStatus = () => ({type:  RESET, status});
export const setUsername = username => ({type: SET_USERNAME, username});
export const setPassword = password => ({type: SET_PASSWORD, password});
export const setLoginName = fullName => ({type: UPDATE_NAME, fullName});

export default (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
        const matchUser = state.users
              .filter(x => x.username == state.username && x.password == state.password)

        const status = matchUser.length > 0 ? action.status.SUCCESS : action.status.FAILED
        const user = matchUser.length > 0 ? matchUser[0] : {}

        console.log(" - USER - ")
        console.log(user)

      return {
        ...state,
        user,
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
    case UPDATE_NAME:
        const newUser = {...state.user}
        newUser.fullName = action.fullName

        return {
          ...state,
          user: newUser
        };
    default:
      return state;
  }
};
