import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import img1 from '../assets/Screenshot_20240129_021444.jpg'
import img2 from '../assets/Screenshot_20240208_171032.jpg'
import img3 from '../assets/Screenshot_2024_0523_163925.jpg'
import img4 from '../assets/Screenshot_2024_0523_163845.jpg'
import img5 from '../assets/Screenshot_2024_0523_163910.jpg'

export default function ContactList() {

const contacts = [
    {
        uid: 1,
        name: 'Rahul Yadav',
        status: "Software Engineer",
        imageURL: img1
    },
    {
        uid: 2,
        name: 'Rahul Yadav2',
        status: "Software Engineer",
        imageURL: img2
    },
    {
        uid: 3,
        name: 'Rahul Yadav3',
        status: "Software Engineer",
        imageURL: img3
    },
    {
        uid: 4,
        name: 'Rahul Yadav4',
        status: "Software Engineer",
        imageURL: img4
    },
    {
        uid: 5,
        name: 'Rahul Yadav5',
        status: "Software Engineer",
        imageURL: img5
    },
]



  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
            {contacts.map((x)=>(
                <View key={x.uid} style={styles.userCard}>
                    <Image source={x.imageURL} style={styles.contactImage}/>
                    <View>
                        <Text style={styles.userName}>{x.name}</Text>
                        <Text style={styles.userStatus}>{x.status}❤</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    contactImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14 
    },
    container: {
        paddingHorizontal: 16
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8D3DAF',
        padding: 8,    
        marginBottom: 4,
        borderRadius: 10
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
})