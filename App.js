import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, Alert, FlatList } from 'react-native';
import Navbar from './components/Navbar';
import Card from './components/Card';
import AddButton from './components/AddButton';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [savedTodos, setSavedTodos] = useState([])

  useEffect(() =>{
    loadTodo()
  }, [])

  const loadTodo = async () =>{
    try{
      const todos = await AsyncStorage.getItem('todos')
      if (todos !== null){
        setSavedTodos(JSON.parse(todos))
      }
    } catch (error) {
      Alert.alert("Errore durante il caricamento dei todo")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="orange"
        barStyle={'light-content'}
      />
      <Navbar />
      <View style={styles.home}>
        <FlatList 
          data={savedTodos}
          renderItem={({item, index}) => <Card todoText={item} indexTodo={index} todos={savedTodos} setTodos={setSavedTodos}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <AddButton todos={savedTodos} setTodos={setSavedTodos}/>
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
  }
});
