import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import img1 from '../assets/tandooriChikan.jpeg'
import img2 from '../assets/daal.jpg'
import img3 from '../assets/dosa.jpeg'
import img4 from '../assets/birpani.jpeg'
import img5 from '../assets/rasgulla.jpeg'
import img6 from '../assets/aloo_paratha.jpeg'
import img7 from '../assets/gobi_manchurian.jpg'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Favourite Food</Text>
        <ScrollView horizontal style={styles.container}>
            <View style={styles.card}>
                <Image source={img1} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img2} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img3} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img4} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img5} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img6} style={styles.cardImage}/>
            </View>
            <View style={styles.card}>
                <Image source={img7} style={styles.cardImage}/>
            </View>
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
    container:{
        padding: 5,   
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8,
        backgroundColor: 'red'
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 4
    }
})