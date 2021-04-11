import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import * as theme from "../theme";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown:false }} />
        <Stack.Screen name="Home" component={ HomeScreen }  options={{ headerStyle: {backgroundColor: theme.COLOR.PRIMARY}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;