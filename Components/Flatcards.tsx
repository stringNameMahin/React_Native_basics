import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
        <View style= {styles.headerbg}>
            <Text style= {styles.headingtext}>Flat cards</Text>
        </View>
        <View style = {styles.container}>
            <View style = {[styles.card, styles.cardOne]}>
                <Text style={styles.text}>Red</Text>
            </View>
            <View style = {[styles.card, styles.cardTwo]}>
                <Text style={styles.text}>Blue</Text>
            </View>
            <View style = {[styles.card, styles.cardThree]}>
                <Text style={styles.text}>Green</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerbg: {
        backgroundColor: '#1e1e1e'
    },
    headingtext: {
        color: '#e5e5e5',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginLeft: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        margin: 8
    },
    card: {
        width: 100,
        height: 100,
        padding: 8,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationColor: '#FFFFFF'
    },
    cardOne: {
        backgroundColor: '#dc0737'
    },
    cardTwo:{
        backgroundColor: '#4ac2f7'
    },
    cardThree:{
        backgroundColor: '#1fe26c'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
})