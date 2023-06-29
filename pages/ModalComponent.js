import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Modal Component</Text>
      <Modal transparent={true} animationType="slide" visible={show}>
        <View style={styles.centerView}>
          <View style={styles.box}>
            <Text>Sagar</Text>
            <TouchableHighlight
              onPress={() => setShow(!show)}
              style={styles.CloseBtn}
            >
              <Text style={styles.btnText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View>
        <TouchableHighlight onPress={() => setShow(!show)} style={styles.btn}>
          <Text style={styles.btnText}>Open Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  btn: {
    marginVertical: 20,
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  centerView: {
    // backgroundColor: "#000",
    flex: 1,
    // opacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    padding: 10,
    backgroundColor: "#fff",
    height: 200,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  CloseBtn: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 8,
  },
});
