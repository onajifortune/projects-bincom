import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Index from "./screens/Index";
import Upload from "./screens/Upload";
import Get from "./screens/Get";
// import Fetch from "./src/Fetch";
// import Test from "./src/Test";
import TestB from "./src/TestB";

export default function App() {
  return (
    <View style={styles.container}>
      <TestB />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
