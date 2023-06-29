import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>This is Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>This is Home Screen</Text>
      <Button
        title="Go to Logout"
        onPress={() => props.navigation.navigate("Logout")}
      />
    </View>
  );
};

const Logout = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Are You Sure Logout</Text>
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

export default StackNavigationDemo;
