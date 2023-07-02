import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ApiCallDemo = () => {
  const [inputData, setInputData] = useState();
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(undefined);

  const url = "http://192.168.223.158:3000";
  const getApiData = async () => {
    let result = await fetch(`${url}/posts`);
    result = await result.json();
    setPost(result);
  };

  const postApiTest = async () => {
    console.warn(inputData);
    if (!inputData) {
      alert("Please Enter Data");
      return false;
    }

    let result = await fetch(`${url}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });
    result = result.json();
    console.warn(result);
    setInputData();
    getApiData();
  };

  const handelDelete = async (id) => {
    let result = await fetch(`${url}/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    alert("Deleted Successfully");
    getApiData();
  };

  const handelUpdate = (data) => {
    setShowModal(true);
    setSelectedData(data);
  };
  const handelUpdateApi = async (id) => {
    let result = await fetch(`${url}/posts/${id}`, {
      method: "UPDATE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedData),
    });
    alert("Updated Successfully");
    setShowModal(false);
    getApiData();
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Api Call Demo</Text>
      <TextInput
        onChangeText={(text) => setInputData({ ...inputData, title: text })}
        placeholder="title"
        style={styles.textField}
        value={inputData?.title}
      />
      <TextInput
        onChangeText={(text) => setInputData({ ...inputData, author: text })}
        placeholder="author"
        style={styles.textField}
        value={inputData?.author}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={() => postApiTest()}>
          {" "}
          Post
        </Text>
      </TouchableOpacity>

      <ScrollView>
        {post?.map((item) => {
          return (
            <View
              style={{
                margin: 5,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
              <View style={{ flexDirection: "row" }}>
                <Button onPress={() => handelDelete(item.id)} title="Delete" />
                <Button
                  onPress={() => {
                    handelUpdate(item);
                  }}
                  title="Update"
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <MaterialCommunityIcons
              onPress={() => setShowModal(false)}
              name="close-circle-outline"
              size={26}
              style={{ textAlign: "right" }}
            />

            <View style={styles.updateForm}>
              <TextInput
                onChangeText={(text) =>
                  setSelectedData({ ...selectedData, title: text })
                }
                placeholder="title"
                style={styles.textField}
                value={selectedData?.title}
              />
              <TextInput
                onChangeText={(text) =>
                  setSelectedData({ ...selectedData, author: text })
                }
                placeholder="author"
                style={styles.textField}
                value={selectedData?.author}
              />
              <TouchableOpacity
                onPress={() => handelUpdateApi(selectedData.id)}
                style={styles.btn}
              >
                <Text style={styles.btnText}> Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  btnText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    opacity: 0.9,
  },
  modalBox: {
    backgroundColor: "#fff",
    gap: 20,

    width: 300,
    shadowOpacity: 0.3,
    shadowColor: "gray",
    borderRadius: 10,
    padding: 20,
  },
  updateForm: {
    gap: 20,
  },
});

export default ApiCallDemo;
