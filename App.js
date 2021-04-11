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
