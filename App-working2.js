import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, StyleSheet, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Button from './components/Button';


const image = require("./one.jpeg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
      </ImageBackground>
      <Text style={styles.text}>Rick and Morty Trivia</Text>
      <View style={styles.footerContainer}>
        <Button label="Login" />
        <Button label="Sign Up" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity. 
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  image: {
    flex: 1,
    width: 429,
    height: 520,
    justifyContent: 'center',
  },
  
});
