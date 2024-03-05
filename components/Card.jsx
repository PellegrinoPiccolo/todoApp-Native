import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Card = () => {
  return (
    <View style={styles.card}>
        <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Title</Text>
            <Text style={{fontSize: 15}}>FARE COMPITI</Text>
        </View>
        <Button title='DELETE ' color={'red'} />
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Card