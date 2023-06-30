import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const Login = (props) => {
  const [user, setUser] = useState({});
  return (
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Sign in </Text>
        <TextInput
          onChangeText={(text) => setUser({ ...user, id: text })}
          placeholder="User Id"
          style={styles.textField}
          value={user.id}
        ></TextInput>
        <TextInput
          placeholder="Password "
          onChangeText={(text) => setUser({ ...user, password: text })}
          style={styles.textField}
          secureTextEntry={true}
          value={user.password}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home", user)}
          style={styles.btn}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text style={{ fontSize: 30 }}>This is Login Screen</Text>

    //   <Button
    //     title="Go to Home"
    //     onPress={() => props.navigation.navigate("Home")}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    gap: 30,
    marginTop: 100,
  },
  textField: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  btn: {
    backgroundColor: "lightblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
