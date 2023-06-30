import React from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

const StackNavigationDemo = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login Page",
            headerStyle: {
              backgroundColor: "skyblue",
            },
          }}
        />
        <Stack.Screen
          options={{
            headerRight: () => (
              <Pressable
                style={{
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => console.warn("press")}
                onLongPress={() => console.warn("Long press")}
                onPressIn={() => console.warn("Long press In")}
                onPressOut={() => console.warn("Long press Out")}
              >
                <Text>Pressable</Text>
              </Pressable>
            ),
            headerTitle: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: "lightblue",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text>Press ME</Text>
              </TouchableOpacity>
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigationDemo;
