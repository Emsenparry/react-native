import { StyleSheet, View, Text } from 'react-native';
import { Header } from './components/header.jsx';
import { List } from './components/list.jsx';
// import { Radiobuttons } from './components/radiobuttons.jsx';
// import { Dropdown } from './components/dropdown.jsx';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <List style={styles.list} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#fff'
  },
  main: {
    height: 500,
    padding: 20
  }
});


