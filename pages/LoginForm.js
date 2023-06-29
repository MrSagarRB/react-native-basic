import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  handelPress = (str) => {
    console.warn(`${user} And ${password}`);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Sign in </Text>
        <TextInput
          onChangeText={(text) => setUser(text)}
          placeholder="User Id"
          style={styles.textField}
          value={user}
        ></TextInput>
        <TextInput
          placeholder="Password "
          onChangeText={(text) => setPassword(text)}
          style={styles.textField}
          secureTextEntry={true}
          value={password}
        ></TextInput>
        <TouchableOpacity onPress={() => handelPress()} style={styles.btn}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default App;
