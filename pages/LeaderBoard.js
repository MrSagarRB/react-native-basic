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
import { Login } from "../components/leaderboard/Login";
import Dashboard from "../components/leaderboard/Dashboard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const LeaderBoard = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login Page",
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation }) => ({
            headerLeft: null,
            title: "Leader board",
            headerTitleStyle: {
              fontSize: 24, // Adjust the font size as desired
              fontWeight: "400",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <MaterialCommunityIcons name="home" size={26} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LeaderBoard;
