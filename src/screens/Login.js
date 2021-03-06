import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import IconTextInput from "../components/IconTextInput";
import Button from "../components/Button";
import Section from "../components/Section";
import * as theme from "../theme";
import users from "../data/Users.json" 
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

const App = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    if (password.trim() === '' ||  username.trim() === '' ){
        showError('Username and Password are required!')
        return; 
    }
    attemptLogin();
  };

  const attemptLogin = ()=>{
    const matchUser = users
              .filter(x => x.username == username && x.password == password)
    if (matchUser.length > 0){
      navigation.replace("Home", {user: matchUser[0]})
    }
  }

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
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <IconTextInput
          placeholder={"Password"}
          iconName={"key"}
          secureTextEntry={true}
          value={password}
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

// const mapStateToProps = (state) => {
//   return { state: state.loginReducer };
// };

// const mapDispatchToProps = (dispatch) => ({
//   attemptLogin: () => dispatch(attemptLogin()),
//   setUsername: (username) => dispatch(setUsername(username)),
//   setPassword: (password) => dispatch(setPassword(password)),
//   resetStatus: () => dispatch(resetStatus())
// });

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;



