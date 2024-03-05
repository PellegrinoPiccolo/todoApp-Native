import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="orange"
        barStyle={'light-content'}
      />
      <Navbar />
      <View style={styles.home}>
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    position: 'relative',
  },
  home: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: 'lightyellow',
    width: '100%',
    marginTop: 0,
    paddingHorizontal: 28,
    paddingVertical: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  }
});
