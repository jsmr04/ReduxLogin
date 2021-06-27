import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function App({ navigation, route }) {
  const [fullName, setFullName] = useState(route.params.user.fullName)
  const onSave = ()=>{
    route.params.user.fullName = fullName
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
