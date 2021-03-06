import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App({ navigation, route }) {
  const { user } = route.params
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
