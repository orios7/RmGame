import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import UserScreen from "./screens/UserScreen";
import StatsScreen from "./screens/StatsScreen";
import CharScreen from "./screens/CharScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
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

