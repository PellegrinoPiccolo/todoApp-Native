import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome6";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
        <Text style={styles.navText}>TO-DO</Text>
        <Icon
            name="sticky-note"
            color="#fff"
            size={25}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    navText: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
    }
})

export default Navbar