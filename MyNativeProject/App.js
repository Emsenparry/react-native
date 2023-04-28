import { StyleSheet, View, Text } from 'react-native';
import { Header } from './components/header.jsx';
import { List } from './components/list.jsx';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <List style={styles.list} />
        </View>
        <Text>Zzzz</Text>
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


