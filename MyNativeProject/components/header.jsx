import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headline}>TODOLIST</Text>
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
  },
  headline: {
    fontSize: 30,
    color: "red",
    verticalAlign: "middle",
  },
  logo: {
    flex: 1,
    aspectRatio: 3.5,
    resizeMode: "contain",
  },
});
