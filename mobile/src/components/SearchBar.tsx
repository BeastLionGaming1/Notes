import { TextInput, View, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <Search size={24} style={styles.searchIcon} />
        <TextInput 
          placeholder="Search notes..."
          value={value}
          onChangeText={onChangeText}
          style={styles.inputBox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  },
  inputContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 4,
    gap: 15,
    borderRadius: 20
  },
  searchIcon: {
    position: "relative",
    left: 5,
  },
  inputBox: {
    width: 200,
    fontWeight: 500,
    fontSize: 16,
  }
});