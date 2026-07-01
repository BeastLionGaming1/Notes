import { View, Text, TouchableOpacity, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import api from "../api.ts";

function Create() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Create Screen!</Text>
        <Button 
         title="Go Back"
         onPress={() => router.back()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Create;