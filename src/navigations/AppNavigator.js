import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//No Redux
// import LoginScreen from "../screens/Login";
// import HomeScreen from "../screens/Home";
// import EditScreen from "../screens/Edit";

//Redux
import LoginScreen from "../screens-redux/Login";
import HomeScreen from "../screens-redux/Home";
import EditScreen from "../screens-redux/Edit";

import * as theme from "../theme";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown:false }} />
        <Stack.Screen name="Home" component={ HomeScreen }  options={{ headerStyle: {backgroundColor: theme.COLOR.PRIMARY}}} />
        <Stack.Screen name="Edit" component={ EditScreen }  options={{ headerStyle: {backgroundColor: theme.COLOR.PRIMARY}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;