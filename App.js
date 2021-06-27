import React from "react";
import AppNavigator from "./src/navigations/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}

// 1) Install dependencies 
//    npm install redux react-redux

// 2) Create store

// 3) Add Provider and store in App.js

// 4) Create action creators, initial data and reducer

// 5) combine and export reducer

// 6 connect screens