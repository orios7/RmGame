import HomeScreen from "./src/Screens/HomeScreen";
import SecondScreen from "./src/Screens/SecondScreen";
import ThirdScreen from "./src/Screens/ThirdScreen";
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
        options={{title: "Rick and Morty Trivia"}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
        />
        <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

