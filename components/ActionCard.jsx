import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

function openWebsite(websiteLink){
    Linking.openURL(websiteLink)
}

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
        <View style={styles.headingContainer}>
            <Text style={styles.header}>Learn React Native and build mobile application.</Text>
        </View>
        <Image
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLH9OoKLKtDVSbnC5bpkU9MiHs5lS_uQHHg&s'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardDescription}> Recct Native is a javascript based mobile app framework, with the help of metro it allow to connect with android and ios mobiles to build scalable bobile application with ease, react native more similar to reactjs... </Text>
            <View style={styles.cardFooter}>
                <TouchableOpacity onPress={()=> openWebsite('https://reactnative.dev/')}>
                        <Text style={styles.socialLink}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/realrahul_77/')}>
                        <Text style={styles.socialLink}>Follow Me</Text>
                </TouchableOpacity>
            </View>
        </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    card: {
        width: 360, 
        height: 380,
        margin: 10,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: 'orange',
        borderRadius: 4
    },
    headingContainer: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'black',
        // fontSize: 16,
        fontWeight: 'bold',
    },  
    headingText:{
        fontSize: 20,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    cardImage: {
        height: 180,
    },
    cardDescription: {
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 10
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 6
    },
    socialLink: {
        backgroundColor: '#fff',
        color: 'black',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4
    }
})