import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsiteLink(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
        <View style= {styles.headerbg}>
            <Text style={styles.headingtext}>Action Cards</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>National Parks</Text>
            </View>
            <Image source={{
                uri: 'https://ranthamborenationalpark-india.com/wp-content/uploads/2024/03/1686043172319_National-Parks-in-India-List-of-10-Most-Revered-National-Parks.webp',
            }}
            style={styles.cardImage} />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>Welcome to a journey of discovery through India's national parks. With its rich biodiversity and stunning landscapes, this diverse nation is home to a treasure trove of natural wonders waiting to be explored. From the mighty Bengal tigers roaming freely in the dense jungles of Ranthambore National Park to the rare and elusive snow leopards of Hemis National Park in the majestic Himalayas, India's national parks offer an unparalleled opportunity to connect with nature.</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text onPress={() => openWebsiteLink('https://ranthamborenationalpark-india.com/indias-national-parks/#google_vignette')} style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => openWebsiteLink('https://www.youtube.com/watch?v=1qR8hni424g')} style={styles.socialLinks}>Watch Now</Text>
                </TouchableOpacity>
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
        padding: 10,
        borderRadius: 8,

    },
    elevatedCard: {
        marginVertical: 12,
        marginHorizontal: 15,
        backgroundColor: '#FFFFFF',
        elevation: 3
    },
    headingContainer: {},
    headingText: {
        fontSize: 18,
        alignItems: 'center',
        

    },
    cardImage: {
        height: 100,
        borderRadius: 8,
    },
    bodyContainer: {},
    footer: {},
    socialLinks: {}
})