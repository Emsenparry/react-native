import React from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Pressable } from "react-native";

const arrData = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
];

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.itemtxt}>{props.title}</Text>
    </View>
  );
};

export const List = () => {
  return (
    <View>
        <View style={styles.formContainer}>
            <TextInput placeholder="Indtast opgave" style={styles.textinput}></TextInput>
            <Pressable style={styles.button}>
                <Text style={styles.btnText}>+</Text>
            </Pressable>
        </View>
      <FlatList
        data={arrData}
        renderItem={itemData => {
          return <ListItem title={itemData.item.title}></ListItem>
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
},
itemtxt: {
    color: '#fff'
},
formContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between'
},
textinput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    width: '84%',
    padding: 10
},
button: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'darkgoldenrod',
    width: 50,
    alignContent: 'center'
},
btnText: {
    padding: 10,
    fontSize: 20,
}
})
