import { StatusBar } from 'expo-status-bar';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { windowHeight, windowWidth } from './src/utils/Dimensions';
import { useEffect, useRef } from 'react';

export default function App() {
  const translateX = useRef(new Animated.Value(0)).current
  const translateY = useRef(new Animated.Value(0)).current
  const maxPositionY = windowHeight / 2 - 100
  const maxPositionX = windowWidth - 140
  useEffect(()=>{
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          useNativeDriver: true,
          toValue: maxPositionY,
          duration: 1500
        }),
        Animated.timing(translateX, {
          toValue: maxPositionX,
          duration: 900,
          easing: Easing.bounce,
          useNativeDriver: true
        }),
        Animated.timing(translateY, {
          useNativeDriver: true,
          toValue: 0,
          duration: 1500
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 900,
          easing: Easing.bounce,
          useNativeDriver: true
        })
  
      ])
    ).start()
  }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View 
          style={[styles.box, 
            {
              transform: [{translateX}, {translateY}]
            }
          ]}
        />
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
