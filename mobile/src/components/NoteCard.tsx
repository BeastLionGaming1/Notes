import { View, Text, StyleSheet } from "react-native";
import { formatDate } from "../app/utils/formatDate.js";

export default function NoteCard({ note }: any) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{note.title}</Text>
        <Text>{formatDate(note.createdAt)}</Text>
      </View>
      <View>
        <Text>{note.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#343434",
    borderRadius: 20,
    width: "100%",
    height: 180
  }
});