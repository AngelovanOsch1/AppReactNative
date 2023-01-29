import { StyleSheet, View } from 'react-native';

import Title from '../components/Title';
import Room from '../components/Room';
import Exit from '../components/Exit';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';


const Index = () => {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
    <View style={styles.topLayout}>
        <Title />
        <Room navigation={navigation} />
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