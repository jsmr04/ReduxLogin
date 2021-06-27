import React, { useEffect } from "react";
import styled from "styled-components/native";
import IconTextInput from "../components/IconTextInput";
import Button from "../components/Button";
import Section from "../components/Section";
import * as theme from "../theme";
import { connect } from "react-redux"; //1) Import connect
import {
  status,
  attemptLogin,
  setUsername,
  setPassword,
  resetStatus,
} from "../redux/reducers/login"; //2) Import reducers
import Toast from "react-native-toast-message";

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding-horizontal: 45px;
  background-color: ${theme.COLOR.BACKGROUND};
`;

const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

const Title = styled.Text`
  font-size: 35px;
  color: ${theme.COLOR.PRIMARY_TEXT};
  margin: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  width: ${theme.DIMENSIONS.MAX_WIDTH};
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  color: ${theme.COLOR.PRIMARY_TEXT};
  font-size: ${theme.FONT.SIZE};
`;

//3) Import state and reducers
const App = ({ navigation, state, setUsername, setPassword, attemptLogin, resetStatus }) => {
  console.log("-- REDUX STATE --")
  console.log(state)
  
  const login = () => {
    if (state.password.trim() === '' ||  state.username.trim() === '' ){
        showError('Username and Password are required!')
        return; 
    }
    attemptLogin();
  };

  useEffect(()=>{
    if (state.status === status.SUCCESS){
        resetStatus()
        navigation.replace("Home")
    }

    if (state.status === status.FAILED){
        resetStatus()
        showError('Username and Password do not match!')
    }

  }, [state.status])

  const showError = (message) =>{
    Toast.show({
        type: "error",
        text1: 'Attention! 👋',
        text2: message
      });
  }

  return (
    <Container>
      {/* TOP */}
      <Section justify={"flex-end"}>
        <Image source={require("../../assets/login.png")} />
        <Title>Welcome</Title>
      </Section>

      {/* BODY */}

      <Section justify={"flex-end"}>
        <IconTextInput
          placeholder={"Username"}
          iconName={"person"}
          value={state.username}
          onChangeText={(text) => setUsername(text)}
        />
        <IconTextInput
          placeholder={"Password"}
          iconName={"key"}
          secureTextEntry={true}
          value={state.password}
          onChangeText={(text) => setPassword(text)}
        />
        <Row>
          <Text>Forgot Password?</Text>
          <Button
            onPress={() => login()}
            title={"LOGIN"}
            marginVertical={"12px"}
          />
        </Row>
      </Section>

      {/* FOOTER */}
      <Section justify={"flex-end"}>
        <Button
          width={theme.DIMENSIONS.MAX_WIDTH}
          marginVertical={"35px"}
          title={"REGISTER"}
        />
      </Section>
    </Container>
  );
};

//Map state
const mapStateToProps = (state) => {
  return { state: state.loginReducer };
};

//Dispatchers 
const mapDispatchToProps = (dispatch) => ({
  attemptLogin: () => dispatch(attemptLogin()),
  setUsername: (username) => dispatch(setUsername(username)),
  setPassword: (password) => dispatch(setPassword(password)),
  resetStatus: () => dispatch(resetStatus())
});

//Connect screen and Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;



