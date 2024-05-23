import { View, Text,PermissionsAndroid, Button } from 'react-native'
import React, { useEffect } from 'react'

const Home = () => {




    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          } 
        } catch (err) {
          console.warn(err);
        }
      };

  return (
    <View>
      <Text>Home</Text>
      <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
  )
}

export default Home