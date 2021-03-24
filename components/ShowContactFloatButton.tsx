import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

const ShowContactFloatButton = () => {
  const navigation = useNavigation();
  const handleContacts = () => {
    navigation.navigate("Contacts");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleContacts}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default ShowContactFloatButton;
