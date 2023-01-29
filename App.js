import { ImageBackground, StyleSheet } from 'react-native';
import Index from './screens/Index';
import Test from './screens/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <ImageBackground source={require('./images/stoelendans-bg.png')} resizeMode="cover" style={styles.image}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Index}></Stack.Screen>
          <Stack.Screen name='Test' component={Test}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})