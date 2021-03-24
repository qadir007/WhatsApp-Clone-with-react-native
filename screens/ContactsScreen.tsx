import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContactListItem from "../components/ContactListitem";
import Users from "../data/Users";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={Users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: { width: "100%" },
});
