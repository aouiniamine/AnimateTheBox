import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { windowHeight, windowWidth } from './src/utils/Dimensions';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View style={styles.box}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: windowWidth - 40,
    height: windowHeight / 2,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "orange"
  }

});
