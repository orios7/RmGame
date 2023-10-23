import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';

//const image = require("./stats.png");

export default function StatsScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";
  return (
    <View style={styles.container}>

      <ImageBackground 
      source={require('../Assets/stats.png')}
      resizeMode='stretch'
      position='absolute'
      style={{flex : 1}}
      >
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text>        
      <Text style={styles.text} ></Text> 
      <Text style={styles.text} ></Text>
      <Text style={styles.text2} > 1. Sophie</Text>
      <Text style={styles.text2} > 2. Omar</Text>
      <Text style={styles.text2} > 3. Chris</Text>
      <Text style={styles.text2} > 4. Sharlton</Text>
      <Text style={styles.text2} > 5. Cesar</Text>
      <Text style={styles.text2} > 6. Cole</Text>
      <Text style={styles.text2} > 7. Gavin</Text>
      <Text style={styles.text2} > 8. George</Text>
      <Text style={styles.text2} > 9. Cheyenne</Text>
      <Text style={styles.text2} > 10. Luiz</Text>

      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    width: 429,
    height: 429,
    justifyContent: 'right',

  },
  text: {
    color: 'midnightblue',
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text2: {
    color: 'midnightblue',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold'
  },

});