import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const sendVoice = () => {
    console.warn("Microphone...");
  };

  const sendMessage = () => {
    console.warn(`Sending: ${message}`);
    setMessage("");
  };

  const handleSendMessage = () => {
    if (!message) {
      sendVoice();
    } else {
      sendMessage();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo style={styles.icon} name="attachment" size={24} color="grey" />
        <Fontisto name="camera" size={24} color="grey" />
      </View>
      <TouchableOpacity onPress={handleSendMessage}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    flex: 1,
    alignItems: "flex-end",
  },
  textInput: { flex: 1, marginHorizontal: 10 },
  icon: { marginHorizontal: 10 },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InputBox;
