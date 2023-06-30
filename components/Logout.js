import { View, Text, Button } from "react-native";

export const Logout = (props) => {
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
