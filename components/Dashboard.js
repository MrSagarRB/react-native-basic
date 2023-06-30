import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import axios from "axios";

export const Dashboard = () => {
  const [photos, setPhotos] = useState(undefined);
  const getPhotos = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(data.data.slice(0, 100));
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: "20",
          padding: 20,
          flexWrap: "wrap",
        }}
      >
        {photos?.map((item) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: "#fff" }}>
              <Image
                source={{
                  uri: "https://picsum.photos/200/300.jpg",
                }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
