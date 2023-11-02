import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Character } from '../Components/Character'
import { CharacterTestData} from "../../test/TestCharacters";

//const image = require("./one.jpeg");

export default function CharScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";
  return (
    <View style={styles.container}>
      <Character Data={CharacterTestData}></Character>



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