import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import AddButton from '../components/AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodosContext from '../context/TodosContext';

const Home = ({navigation}) => {

  const {todos, setTodos, todosCompleted, todosToComplete} = useContext(TodosContext)
  
  return (
    <SafeAreaView style={styles.container}>

        <StatusBar
        animated={true}
        backgroundColor="orange"
        barStyle={'light-content'}
        />
        <Navbar />
        <ScrollView>
        <View style={styles.home}>
          <View>
            <Text style={styles.titleSection}>DA COMPLETARE</Text>
            <FlatList 
                data={todos}
                renderItem={({item, index}) => !item.completed && <Card todoText={item.text} todoCompleted={item.completed} indexTodo={index} navigation={navigation}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <View>
          <Text style={[styles.titleSection, {marginTop: 8}]}>COMPLETATI</Text>
          <FlatList 
              data={todos}
              renderItem={({item, index}) => item.completed && <Card todoText={item.text} todoCompleted={item.completed} indexTodo={index} navigation={navigation}/>}
              keyExtractor={(item, index) => index.toString()}
          />
        </View>
        </View>
        </ScrollView>
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
      minHeight: Dimensions.get('window').height - 50,
      backgroundColor: 'lightyellow',
      width: '100%',
      marginTop: 0,
      paddingHorizontal: 28,
      paddingVertical: 28,
      display: 'flex',
      flexDirection: 'column',
    },
    titleSection: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 1,
    }
  });

export default Home
