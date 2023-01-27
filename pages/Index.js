import React from 'react'
import { StyleSheet, View } from 'react-native';

import Title from '../components/Title';
import Room from '../components/Room';
import Exit from '../components/Exit';

const Index = () => {
  return (
    <>
    <View style={styles.topLayout}>
        <Title />
        <Room />
    </View>
    <View style={styles.bottomLayout}>
        <Exit />
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  
    topLayout: {
      justifyContent: "space-evenly",
      alignItems: "center",
      flex: 3
    },
  
    bottomLayout: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      padding: 30,
    }
  });
  

export default Index