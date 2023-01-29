import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';

const Room = ({ navigation }) => {

  return (
    <View style={styles.borderRoom}>
        <Text style={styles.textStylingTitle}>Select Room</Text>
        <Pressable 
            title="test" 
            style={styles.borderSelect}
            onPress={() => navigation.navigate('Test')}
        >
            <Text style={styles.textStyling}>Join a room</Text>
        </Pressable>
        <Pressable style={styles.borderSelect}>
            <Text style={styles.textStyling}>Create a room</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    borderRoom: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 240,
        width: 350,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
        color: "#fff"        
    },

    textStylingTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff"
    },

    borderSelect: {
        width: 310,
        backgroundColor: 'rgba(255,255,255, 0.4)',
        borderRadius: 5,
        padding: 10
    },

    textStyling: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
    }
})

export default Room