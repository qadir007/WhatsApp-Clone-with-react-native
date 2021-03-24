import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { User } from "../types";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();

  const handleNavigation = () => {
    // navigate to the seleced user
  };
  return (
    <TouchableWithoutFeedback onPress={handleNavigation}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: { flexDirection: "row" },
  midContainer: { justifyContent: "space-around" },
  avatar: { width: 50, height: 50, borderRadius: 50, marginRight: 15 },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
});

export default ContactListItem;
