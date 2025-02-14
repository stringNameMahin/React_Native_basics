//Basic app to learn basic componenets and styling

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './Components/Flatcards'
import ScrollableCards from './Components/ScrollableCards'
import Fancycards from './Components/Fancycards'
import ActionCards from './Components/ActionCards'
import ContactList from './Components/ContactList'

const Proj2 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Flatcards/>
            <ScrollableCards/>
            <Fancycards/>
            <ActionCards/>
            <ContactList/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Proj2;