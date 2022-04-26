import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SolicitudAsesoria from './components/PerfilAsesor';

export default function App() {
  return (
    <View style={styles.container}>
      <SolicitudAsesoria />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
