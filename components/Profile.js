import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export const Profile = () => {
  const [list, setList] = useState([]);

  const getTodo = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    result = await result.json();
    setList(result);
  };

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30, textAlign: "center", marginVertical: 10 }}>
        Profile
      </Text>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 10, flexDirection: "row", gap: 10 }}>
              <Text style={{ fontSize: 20 }}>{item.id}</Text>
              <Text style={{ fontSize: 20 }}>
                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
