import * as React from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import ChatListItem from "../components/ChatListItem";
import ShowContactFloatButton from "../components/ShowContactFloatButton";
import chatRooms from "../data/ChatRooms";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={chatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
      <ShowContactFloatButton />
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
