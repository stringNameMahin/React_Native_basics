import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Mahin",
            status: "Status :  Lorem ipsum dolor, sit amet consectetur.",
            imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQEp8ZzBye6Fbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705131646157?e=1744243200&v=beta&t=oM_Nza5hjZHd9BIB54_i_WH_CMF7EaWHiCFHyiEHHYc'
        },
        {
            uid: 2,
            name: "Srijan",
            status: "Status :  Lorem ipsum dolor, sit amet consectetur.",
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGZ774HVZ3NxA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691223240427?e=1744243200&v=beta&t=-OHneo6xSPAh22vd36HwUz_wXS7AoJHzBd1UwiAoOpg'
        },
        {
            uid: 3,
            name: "Nitin",
            status: "Status :  Lorem ipsum dolor, sit amet consectetur.",
            imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQG6VYP1P772dQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724005960718?e=1744243200&v=beta&t=XRt4uQp8MnqjwuK-V2eg2o-Jb80c9V5LkknOn4KG4SU'
        },
        {
            uid: 4,
            name: "Devin",
            status: "Status :  Lorem ipsum dolor, sit amet consectetur.",
            imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFlEZeXuUrZOw/profile-displayphoto-shrink_400_400/B56ZSpLDWhHEAs-/0/1738005035453?e=1744243200&v=beta&t=GA8EI-u8RjgnsS1OobNk2L1aOH0DBUVrsJqB64L2iJM'
        }
    ]
  return (
    <View>
        <View style={styles.headerbg}>
            <Text style={styles.headingtext}>Contact List</Text>
        </View>
        <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                        <Image source={{uri:imageUrl}} style={styles.userImg} />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
            {/* You can use () => () to directly return a call back but when you use () => {}  you must specify a "return" inside the {}*/}
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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8
    },
    // imgcontainer:{
    //     flex: 1,
    //     alignItems: 'flex-end',
    //     justifyContent: 'center',
    //     marginTop: 10
    // },
    userImg:{
        height: 60,
        width : 60,
        borderRadius: 60 / 2, //Circle pfp to be half of the width (thats the idea)
        padding: 4,
        marginRight: 10,
    },
    userCard: {
        padding: 8,
        margin: 2,
        backgroundColor: '#1d1d1d',
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        marginVertical: 4
    },
    userName: {
        color: "#fff",
        marginTop: 2,
        marginBottom: 1,
        paddingTop: 4
    },
    userStatus: {
        color: "#fff",
        marginBottom: 2,
        marginTop: 1,
        flexWrap: 'wrap',
        width: 300
    }
})