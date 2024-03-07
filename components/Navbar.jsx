import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
        <Text style={styles.navText}>TO-DO</Text>
        <Image 
            source={require('../assets/icon.png')}
            style={styles.logo}
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
    },
    logo: {
        width: 40,
        height: 40,
    }
})

export default Navbar