import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux"; //1) Import connect

function App({ navigation, route, user }) {
  //console.log(state)
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Email: {user.username}</Text>
        <Text style={{ fontSize: 20 }}>Full Name: {user.fullName}</Text>
        <Button title="Edit" onPress={()=>navigation.navigate("Edit", {user})} />
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

//Connect screen and Redux
export default connect(mapStateToProps)(App);