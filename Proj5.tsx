// Dice Roll App

import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from './Img/One.png'
import DiceTwo from './Img/Two.png'
import DiceThree from './Img/Three.png'
import DiceFour from './Img/Four.png'
import DiceFive from './Img/Five.png'
import DiceSix from './Img/Six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

const [diceImage, setdiceImage] = useState<ImageSourcePropType>(DiceOne)

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const rollDiceOnTap = () => {
  // ReactNativeHapticFeedback.trigger("impactLight", options);
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  
  switch(randomNumber){
    case 1:
      setdiceImage(DiceOne)
      break;
    case 2:
      setdiceImage(DiceTwo)
      break;
    case 3:
      setdiceImage(DiceThree)
      break;
    case 4:
      setdiceImage(DiceFour) 
      break;
    case 5:
      setdiceImage(DiceFive)
      break;
    case 6:
      setdiceImage(DiceSix)
      break;
    
    default: 
      setdiceImage(DiceOne)
      break;
  }
}



function Proj5(): JSX.Element {
  return (
    <>
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});