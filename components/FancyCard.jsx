import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tanding Places</Text>
      <View style={[styles.card]}>
        <Image
            source={{
                uri:'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Hawa-Mahal_600-1280x720.jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>The Hawa mahal is a place in the city of jaipur, India. Built from red and pink sandstone, it is on the edge of the city place </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    cardImage:{
        height: 200,
        borderRadius: 4,
        marginBottom: 8
    },
    card:{
      // borderColor: 'white',
      // borderWidth: 1,
      width: 360,
      height: 360,
      marginVertical: 12,
      marginHorizontal: 16,
      backgroundColor: '#fff',
      borderRadius: 4
    },
    cardBody:{
      paddingHorizontal: 12,
      flex: 1,
      flexGrow: 1,
      
    },
    cardTitle:{
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4
    },
    cardLabel:{
      color: 'black',
      fontSize: 14,
      marginBottom: 6
    },
    cardDescription: {
      color: 'black',
      marginBottom: 12,
      color: '#758283',
      fontSize: 12,
    },
    cardFooter:{
      color: 'black'
    }
})