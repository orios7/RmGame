import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';

//const image = require("./one.jpeg");

export default function CharScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";
  return (
    <View style={styles.container}>

    <ImageBackground 
      source={require('../Assets/char.png')}
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
      <Text style={styles.text} >   Name: "Rick Sanchez"</Text>
      <Text style={styles.text} >   Status: "Alive" </Text>
      <Text style={styles.text} >   Species: "Human" </Text>
      <Text style={styles.text} >   Gender: "Male" </Text>
      <Text style={styles.text} > </Text>



      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    justifyContent: 'center',
    //borderColor: 'midnightblue',
    //borderWidth: '2'
  },
  text: {
    color: 'midnightblue',
    //alignSelf: 'left',
    //borderColor: 'midnightblue',
    alignSelf: 'center',
    fontSize: 20,
  },



});