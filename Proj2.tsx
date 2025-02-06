import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './Components/Flatcards'

const Proj2 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Flatcards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Proj2