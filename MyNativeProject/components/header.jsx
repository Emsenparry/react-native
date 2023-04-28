import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headline}>ToDoList</Text>
      <Image
        style={styles.logo}
        source={require("../assets/icon-144x144.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#008080",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 17
  },
  headline: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  logo: {
    width: 50,
    height: 50,
  },
});
