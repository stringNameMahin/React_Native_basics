import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet, // Is basically CSS
  useColorScheme // used to determine the color scheme (light or dark) that user has selected for their device (there are three color schemes light / dark / null- null meaning user has not indicated a preferred color theme.)
} from 'react-native'

function App(){
  const isdark = useColorScheme() === 'dark';
  return(
    <SafeAreaView>
      <View style = {styles.container}>
        <Text style = {isdark ? styles.whiteText : styles.darkText}>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // for shifting items left to right
    justifyContent: 'center' // for shifting items from top to bottom
  },

  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
});

export default App;