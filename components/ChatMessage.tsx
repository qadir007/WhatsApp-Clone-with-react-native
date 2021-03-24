import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Message } from "../types";
import moment from "moment";
import Colors from "../constants/Colors";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => message.user.id === "u1";

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: isMyMessage()
            ? Colors.light.myMessage
            : Colors.light.otherMessage,
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }}
      >
        {!isMyMessage() && (
          <Text style={styles.username}>{message.user.name}</Text>
        )}
        <Text style={styles.content}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {},
  username: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});

export default ChatMessage;
