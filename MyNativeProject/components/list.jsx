import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

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
  // State var til input tekst
  const [enteredTaskText, setEnteredTaskText] = useState();
  // State var til task liste (array)
  const [taskList, setTaskList] = useState([]);

  // Handler som sætter input tekst var når den skrives i feltet
  const taskTextHandler = (enteredTaskText) => {
    setEnteredTaskText(enteredTaskText);
    // console.log(enteredTaskText);
  };

  // Handler som tilføjer tekst til array af tasks
  const addTaskHandler = () => {
    setTaskList((curTasks) => [
      // spread operator. Spreader nuværende liste
      ...curTasks,
      // Tilføjer id og tekst til nuværende liste
      { id: Math.random().toString(), title: enteredTaskText },
    ]);
    // Nulstiller input tekst
    setEnteredTaskText("");
  };

  // Handler til at slette tasks med
  const deleteTask = (id) => {
    // Sætter liste til sig selv uden id der skal slettes
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Indtast opgave"
          style={styles.textinput}
          onChangeText={taskTextHandler}
          value={enteredTaskText}
        ></TextInput>
        <Pressable style={styles.button} onPress={addTaskHandler}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={taskList}
        renderItem={itemData => {
          return (
            <Pressable onPress={e => deleteTask(itemData.item.id)}>
              <ListItem title={itemData.item.title}></ListItem>
            </Pressable>
          );
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
    marginBottom: 5,
  },
  itemtxt: {
    color: "#fff",
  },
  formContainer: {
    flexDirection: "row",
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    width: "84%",
    padding: 10,
  },
  button: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "darkgoldenrod",
    width: 50,
    alignContent: "center",
  },
  btnText: {
    padding: 10,
    fontSize: 20,
  },
});
