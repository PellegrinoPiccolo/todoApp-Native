import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar, Dimensions, FlatList } from 'react-native';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import AddButton from '../components/AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodosContext from '../context/TodosContext';

const Home = ({navigation}) => {

  const {todos, setTodos} = useContext(TodosContext)
  
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
            data={todos}
            renderItem={({item, index}) => <Card todoText={item.text} todoCompleted={item.completed} indexTodo={index} navigation={navigation}/>}
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
        <AddButton />
    </SafeAreaView>
  )
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

export default Home
