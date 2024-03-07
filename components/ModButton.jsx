import React, { useContext, useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { View, StyleSheet, Modal, TextInput, Text, Pressable } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome6";
import TodosContext from '../context/TodosContext';

const ModButton = ({textTodo, indexTodo}) => {

    const { modTodo, todos } = useContext(TodosContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [text, onChangeText] = useState(textTodo)
    const [errorMessage, setErroreMessage] = useState('')

    const openModal = () =>{
        setModalVisible(true)
    }

    const closeModal = () =>{
        setModalVisible(false)
        onChangeText(todos[indexTodo].text)
        setErroreMessage('')
    }

    const onChangeTodo = (e) =>{
        if(e === ''){
            setErroreMessage('Inserisci almeno un carattere')
        }else {
            setErroreMessage('')
        }
        onChangeText(e)
    }

  return (
    <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <TouchableNativeFeedback onPress={openModal}>
            <View style={styles.modButton}>
                <Icon
                    name="pen"
                    color="#fff"
                    size={22}
                />
            </View>
        </TouchableNativeFeedback>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={false}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modal}>
                <View style={styles.inputFieldView}>
                    <View>
                        <TextInput 
                            onChangeText={onChangeTodo}
                            value={text}
                            placeholder='Inserisci nuovo todo...'
                            style={styles.inputField}
                        />
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 2}}>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={closeModal}>
                            <Text style={styles.textButtonClose}>Chiudi</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => modTodo(text, closeModal, indexTodo)}>
                            <Text style={styles.textButtonClose}>Salva</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modButton: {
        position: 'absolute',
        bottom: 40,
        right: 18,
        zIndex: 1,
        backgroundColor: 'orange',
        padding: 14,
        borderRadius: 8,
        elevation: 8,
        // Ombra su iOS 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'lightyellow',
        zIndex: 98,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputFieldView: {
        width: '80%',
        marginHorizontal: 'auto',
        backgroundColor: 'red',
        padding: 18,
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 18,
        gap: 12,
    },
    buttonClose: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: 'lightyellow',
        borderRadius: 15,
    },
    textButtonClose: {
        color: 'black',
        fontSize: 18,
    },
    inputField: {
        fontSize: 18,
        padding: 0,
        textAlign: 'center',
    },
    errorMessage: {
        color: 'red',
        margin: 0,
    }
})

export default ModButton
