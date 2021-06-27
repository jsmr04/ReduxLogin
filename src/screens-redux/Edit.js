import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { connect } from "react-redux"; //1) Import connect
import { setLoginName } from "../redux/reducers/login";

function App({ navigation, route, user, setLoginName }) {
  const [fullName, setFullName] = useState(user.fullName)
  
  const onSave = ()=>{
    setLoginName(fullName)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
        <TextInput
            style={{ borderWidth:1, fontSize: 20, padding: 10, borderRadius: 5, width:200 }}
            value={fullName}
            onChangeText={text => setFullName(text)}
            autoFocus={true}
        />
        <Button title="Save" onPress={()=> onSave()} />
    </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

//Map state
const mapStateToProps = (state) => {
  return { user: state.loginReducer.user };
};

//Dispatchers 
const mapDispatchToProps = (dispatch) => ({
  setLoginName: (fullName) => dispatch(setLoginName(fullName)),
});

//Connect screen and Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);