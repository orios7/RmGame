import HomeScreen from "./src/Screens/HomeScreen";
import MainScreen from "./src/Screens/MainScreen";
import UserScreen from "./src/Screens/UserScreen";
import StatsScreen from "./src/Screens/StatsScreen";
import CharScreen from "./src/Screens/CharScreen";
import SecondScreen from "./src/Screens/SecondScreen";
import ThirdScreen from "./src/Screens/ThirdScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {LoginScreen} from "./src/Screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'GetSchwifty': require('./src/Assets/fonts/get_schwifty.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={LoginScreen}
        options={{title: "Rick and Morty Trivia Game"}}
        />
        <Stack.Screen 
          name="Main"
          component={MainScreen}
          options={{title: "Main"}}
        />
        <Stack.Screen 
          name="User"
          component={UserScreen}
          options={{title: "Profile"}}
        />
        <Stack.Screen 
          name="Stats"
          component={StatsScreen}
          options={{title: "Top 10"}}
        />
        <Stack.Screen 
          name="Characters"
          component={CharScreen}
          options={{title: "Mort-y-Dex Character Encyclopedia"}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

