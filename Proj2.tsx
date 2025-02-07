import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './Components/Flatcards'
import ScrollableCards from './Components/ScrollableCards'
import Fancycards from './Components/Fancycards'

const Proj2 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Flatcards/>
            <ScrollableCards/>
            <Fancycards/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Proj2;