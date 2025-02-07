import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollableCards() {
  return (
    <View>
        <View style={styles.headerbg}>
            <Text style={styles.headingtext}>Scrollable Cards</Text>
        </View>
      <ScrollView horizontal={true} >
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
        <View style={styles.card}>
            <Text>Text</Text>
        </View>
      </ScrollView>
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
        flex: 1,
        backgroundColor: '#dadada',
        shadowOffset: {    //Used to add shadows to your objects
            width: 10,
            height: 10
        },
        shadowColor: '#dc0737',
        margin: 8,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 100,
        height: 100
    }
})