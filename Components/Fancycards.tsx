import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycards() {
  return (
    <View>
        <View style={styles.headerbg}>
            <Text style={styles.headingtext}>Trending Images</Text>
        </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../Img/tiger.jpg')}
         style={styles.cardImage} />
         <View style={styles.cardBody}>
            <View style={styles.sidebyside}>
                <Text style={styles.cardTitle}>Tiger</Text>
                <Text style={styles.cardLabel}>Royal Bengal Tiger</Text>
            </View>
            <Text style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam illo eligendi, deleniti provident earum labore iusto maxime unde pariatur aliquam possimus error, perferendis fugiat expedita.</Text>
            <Text style={styles.cardFooter}>at National Park</Text>
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
    card: {
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 15,
        borderRadius: 8,
        // flex:1
        // borderTopLeftRadius: 8 // You can individually change all the corner's radius

    },
    cardImage: {
        height: 250,
        width: 380,
        borderRadius: 8,
        // flex: 1
    },
    cardBody: {
        padding: 10,
        flex: 1,
        // flexGrow: 1,
        paddingHorizontal: 12
    },
    sidebyside: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3
    },
    cardTitle: {
        color: '#1d1d1d',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    cardLabel: {
        // textAlign: 'right',

        // if sidebyside style wasnt there this is the way + use margins but its too much of a hassle to do all that and manually alight everything (so just use styles like sidebyside to bring two elements side by side)
        
        color: '#1d1d1d',
        fontWeight: 'bold',
        marginBottom: 1
    },
    cardDesc: {
        color: '#1d1d1d',
        marginBottom: 12
    },
    cardFooter: {
        color: '#AE1438',
        fontSize: 18,
        fontWeight: 'condensedBold',
    }

})