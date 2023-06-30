import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TabNavigationDemo = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="red" inactiveColor="blue">
        <Tab.Screen
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Card",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cellphone"
                color={color}
                size={26}
              />
            ),
          }}
          name="Card"
          component={Card}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Dashboard = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}> Dashboard</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Profile</Text>
    </View>
  );
};

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Card</Text>
    </View>
  );
};
export default TabNavigationDemo;
