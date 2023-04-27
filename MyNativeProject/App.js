import { StyleSheet } from 'react-native';
import { Header } from './components/header.jsx';

export default function App() {
  return (
    <Header />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


