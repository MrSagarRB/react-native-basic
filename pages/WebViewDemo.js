import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebViewDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Web View</Text>
      <WebView source={{ uri: "https://reactnative.dev/" }}></WebView>
    </View>
  );
};

export default WebViewDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
});
