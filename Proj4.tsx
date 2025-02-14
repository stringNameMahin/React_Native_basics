// Bg color randomizer app

import { StatusBar, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'

export default function Proj4() {
    
    const [clrchg, setclrchg] = useState('#000000')

    const colorswitch= () => {
        const hexrange= '0123456789ABCDEF'
        let color = '#'

        for( let i = 0; i<6 ; i++){
            color += hexrange[Math.floor(Math.random() * 16)]
        }
        setclrchg(color)
    }

  return (
    <>
    <StatusBar backgroundColor={clrchg} />
    <View style= {[styles.container, {backgroundColor: (clrchg)}]}>
        <TouchableOpacity
        style= {styles.btn}
        onPress={colorswitch}
        >
            <Text style={[styles.btntxt, {color:clrchg}]}>Click Me</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        borderRadius: 12
    },
    btntxt: {
        padding: 8,
        marginHorizontal: 10,
        fontSize: 24,
        color: "#000"
    }
})