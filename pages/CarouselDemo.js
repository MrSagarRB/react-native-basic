import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import User from "../data/users.json";

const CarouselDemo = () => {
  return (
    <View>
      <Text>Carousel</Text>
      <View style={{ marginTop: 100 }}>
        <Carousel
          containerCustomStyles={{ overflow: "visible" }}
          data={User}
          renderItem={({ item }) => <Card />}
          inactiveSlideOpacity={0.75}
          inactiveSlideScale={0.77}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
      </View>
    </View>
  );
};

const Card = () => {
  return <View style={styles.card}></View>;
};

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: "100%",
    borderWidth: 1,
    borderRadius: 40,
    padding: 20,
    backgroundColor: "lightblue",
  },
});

export default CarouselDemo;
