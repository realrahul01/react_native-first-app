import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Resturants</Text>
      <View style={styles.container}>
            <ScrollView horizontal style={styles.resturant_img}>
                <Image
                    source={{
                        uri: 'https://hauteliving.com/wp-content/uploads/2014/03/custom_RCATLAN_00216_156336.jpg'
                    }}
                    style={styles.cardImage}
                />
                <Image
                    source={{
                        uri: 'https://th.bing.com/th/id/OIP.D4QzXzJst7NjBhy6krhKlAHaFj?w=210&h=180&c=7&r=0&o=5&pid=1.7'
                    }}
                    style={styles.cardImage}
                />
                <Image
                    source={{
                        uri: 'https://th.bing.com/th/id/OIP.JSYA5dP0GcgldoVG8jn4FwHaFj?w=272&h=204&c=7&r=0&o=5&pid=1.7'
                    }}
                    style={styles.cardImage}
                />
                <Image
                    source={{
                        uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/PEWal2h_tBaVfho9cOVzkA/348s.jpg'
                    }}
                    style={styles.cardImage}
                />
                <Image
                    source={{
                        uri: 'https://th.bing.com/th/id/OIP.2fm7sbQvGyJOL3vGtgebtwAAAA?pid=ImgDet&w=175&h=175&c=7'
                    }}
                    style={styles.cardImage}
                />
            </ScrollView>
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
    container:{
        flex: 1,
        padding: 4,
        marginTop: 5

    },  
    resturant_img:{
        flexDirection: 'row'
    },
    card:{
        width:100,
        height:100,
        borderRadius: 4,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardOne:{
        backgroundColor: 'red',
    },
    cardTwo:{
        backgroundColor: 'blue',
    },
    cardThree:{
        backgroundColor: 'green',
    },
    cardFour: {
        backgroundColor: 'orange'
    },
    cardImage: {
        width: 180,
        height: 100,
        marginHorizontal: 6,
        borderRadius: 4
    }
})