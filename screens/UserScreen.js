import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';

import React, { useState } from 'react'; // Use to exit: BackHandler.exitApp(); 

//const image = require("./oneonenine.jpeg");

export default function UserScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";

  const [Email, setName1] = useState('');
  const [pw, setName2] = useState('');

  return (
    <View style={styles.container}>

      <ImageBackground 
      source={require('./user.png')}
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
      <Text style={styles.text} >                                  email_test: {Email} </Text>
      <Text style={styles.text} >                                  pw_test: {pw} </Text>

      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>

      <TextInput
        style = {styles.textinput}
        placeholder='Email'
        onChangeText={(Email)=>setName1(Email)}
      />

      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      
      <TextInput
        style = {styles.textinput}
        placeholder='Password'
        onChangeText={(pw)=>setName2(   pw)}
      />
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Button 
        style = {styles.button}
        title="Submit"

        onPress={() => navigation.navigate("Main", { language: "e" })}
      />
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>
      <Text style={styles.text} ></Text>

      <TextInput
        style = {styles.textinput}
        placeholder='Placeholder'
        onChangeText={(pw)=>setName2(pw)}
      />

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93F74A',

  },
  image: {
    flex: 1,
    width: 429,
    height: 429,
    justifyContent: 'center',
  },
  textinput: {
    fontSize: 20,
    color: 'blue',
    //borderWidth: 2,
    //borderColor: 'blue',
    margin: 10,
    alignSelf: 'center',
  }, 
  text: {
    color: 'blue',
    //alignSelf: 'left',
    borderColor: 'blue',
    alignSelf: 'left',
  },
  button: {
    flex: 1,
    borderWidth: 2,
    fontSize: 10,
    Color: 'midnightblue',
    borderColor: 'blue',
    padding: 2
  },
});