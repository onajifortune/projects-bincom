import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { firebase } from "../config";

function Fetch() {
  const [users, setUsers] = useState();
  const todoRef = firebase.firestore().collection("todos");

  useEffect(async () => {
    todoRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { heading, text } = doc.data();
        users.push({
          id: doc.id,
          heading,
          text,
        });
      });
      setUsers(users);
    });
  });

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        style={{ height: 100 }}
        data={users}
        numColumns={1}
        renderItem={(item, index) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.heading}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    fontWeight: "bold",
  },
  itemText: {
    fontWeight: 300,
  },
});

export default Fetch;
