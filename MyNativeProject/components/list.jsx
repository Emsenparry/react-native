import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const arrData = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
];

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.listitemtxt}>{props.title}</Text>
    </View>
  );
};

export const List = () => {
  return (
    <View>
      <FlatList
        data={arrData}
        renderItem={itemData => {
          return <ListItem title={itemData.item.title}></ListItem>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
listitem: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "teal",
    paddingHorizontal: 8,
    paddingVertical: 15,
    marginBottom: 5
}
})
