import { ImageBackground, StyleSheet } from 'react-native';
import Index from './pages/Index';

export default function App() {
  return (
    <ImageBackground source={require('./images/stoelendans-bg.png')} resizeMode="cover" style={styles.image} >
      <Index />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})