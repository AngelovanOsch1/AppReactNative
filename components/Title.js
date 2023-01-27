import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const Title = () => {
  return (
    <View style={styles.border}>
        <Text style={styles.titleText}>Stoelendans</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    border: {
        height: 60,
        width: 350,
        backgroundColor: "#000",
        borderRadius: 5
    },

    titleText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 40
    }
})

export default Title