import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResponsiveLayout = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.Innerbox1}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2853&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.Innerbox4}>
          <View style={styles.Innerbox1}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.Innerbox2}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.Innerbox1}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1604860428762-f55cea62b7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.Innerbox2}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.Innerbox3}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1619038779484-a27362fb82cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default ResponsiveLayout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    backgroundColor: "yellow",
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  Innerbox1: {
    flex: 1,
    backgroundColor: "red",
    overflow: "hidden",
  },
  Innerbox2: {
    flex: 1,
    backgroundColor: "green",
  },
  Innerbox3: {
    flex: 1,
    backgroundColor: "pink",
  },
  Innerbox4: {
    flex: 1,
    gap: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
