import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';

const image = require("../Assets/twofourtwo.jpeg");

export default function MainScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";
  return (
    <View style={styles.container}>


      <ImageBackground 
      source={require('../Assets/main.png')}
      resizeMode='cover'
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

      <Button
        style = {styles.button} 
        title="Profile"
        onPress={() => navigation.navigate("User", { language: "e" })}
      />

      <Text style={styles.text} > </Text>
      <Button 
        style = {styles.button}
        title="Top 10"
        onPress={() => navigation.navigate("Stats", { language: "french" })}
      />
      <Text style={styles.text} > </Text>
      <Button 
        style = {styles.button}
        title="Character List"
        onPress={() => navigation.navigate("Characters", { language: "french" })}
      />
      <Text style={styles.text} > </Text>
      <Button 
        style = {styles.button}
        title="log Out"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      />
      <Button
          style = {styles.button}
          title="Trivia"
          onPress={() => navigation.navigate("Trivia", { language: "e" })}
      />

      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE480',

  },
  image: {
    flex: 1,
    width: 429,
    height: 429,
    justifyContent: 'center',
    //borderColor: 'red',
    //borderWidth: 5,
  },
  button: {
    flex: 1,
    borderWidth: 2,
    Color: 'midnightblue',
    borderColor: 'blue',
    padding: 2,
    alignItems: 'left'
  },

});