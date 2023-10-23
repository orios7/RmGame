import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground, Text, TextInput, Image } from 'react-native';

import React, { useState } from 'react'; // Use to exit: BackHandler.exitApp(); 



export default function HomeScreen({ navigation }) {

      const [name, setName1] = useState('');
      const [pw, setName2] = useState('');

  return (  

    <View style={styles.container}>
      <ImageBackground 
      source={require('../Assets/RNM3.png')}
      resizeMode='stretch'
      position='absolute'
      style={{flex : 1}}
      >
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>

      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>

      <Text style={styles.text} >     username_test: {name} </Text>
      <Text style={styles.text} >     password_test: {pw} </Text>
      <Text style={styles.text} > </Text>
      <TextInput
        style = {styles.textinput}
        placeholder='Username'
        onChangeText={(name)=>setName1(name)}
      />
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <TextInput
        style = {styles.textinput}
        placeholder='Password'
        onChangeText={(pw)=>setName2(pw)}
      />

      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Text style={styles.text} > </Text>
      <Button 
        style = {styles.button}
        title="Login"

        onPress={() => navigation.navigate("Main", { language: "e" })}
      />
      <Text style={styles.text} > </Text>
      <Button 
        style = {styles.button}
        title="Signup"

        onPress={() => navigation.navigate("User", { language: "e" })}
      />

</ImageBackground>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  
  footerContainer: {
    flex: 1 / 1,
    alignItems: 'center',
  },

  textinput: {
    fontSize: 20,
    color: 'blue',
    alignSelf: 'center',
    //borderWidth: 2,
    borderColor: '#7fffd4',
    margin: 10
  }, 

  text: {
    fontSize: 10, 
    color: '#7fffd4'
  },

  text2: {
    fontSize: 20, 
    color: '#7fffd4'
  },


  button: {
    flex: 1,
    borderWidth: 2,
    //Color: '#7fffd4',
    //borderColor: '#7fffd4',
    padding: 2
  },

  image: {
    flex: .5,
    justifyContent: 'center',
    resizeMode: 'cover'
  }
});

