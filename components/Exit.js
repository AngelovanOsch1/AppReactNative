import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native';

const Exit = () => {
  return (
    <Pressable style={styles.exitBtn}>
        <Text style={styles.exitBtnText}>Exit</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

    exitBtn: {
        backgroundColor: "#a50c44",
        width: 80,
        padding: 10,
        borderRadius: 10
    }, 

    exitBtnText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default Exit