import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';

import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

function StartBookingScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <View style={styles.mapView}>
        <Text
          style={{
            fontSize: moderateVerticalScale(30),
            marginTop: verticalScale(30),
            marginLeft: scale(50),
          }}>
          Map
        </Text>
        {/* {found === true ? (
        <MapView
          initialRegion={{
            latitude: pin.latitude,
            longitude: pin.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(region) => {
            console.log(JSON.stringify(region));
          }}
          style={styles.map}
        >
          <Marker
            coordinate={pin}
            draggable={false}
            onDragStart={(e) => {
              console.log("Dragstart", e.nativeEvent.coordinate);
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Callout>
              <Text>Your Vehicle!</Text>
            </Callout>
          </Marker>
          <Circle center={pin} radius={1000}></Circle>
        </MapView>
      ) : (
        <ActivityIndicator
          style={{ marginTop: 200 }}
          color="red"
          size={"large"}
        />
      )} */}
      </View>
      <View>
        <Text
          style={{
            marginHorizontal: scale(20),
            fontSize: moderateVerticalScale(18),
            marginTop: verticalScale(10),
          }}>
          Where's your Vehicle?
        </Text>
        <TextInput
          style={{margin: moderateVerticalScale(20)}}
          placeholder="Enter location"
        />
        <Text style={{padding: moderateVerticalScale(20)}}>
          Hold and Move the pin to highlight the correct location of your car -
          it really helps!
        </Text>
      </View>
      <View>
        <Button
          style={{marginHorizontal: scale(10), marginTop: verticalScale(10)}}
          onPress={() => {
            navigation.navigate('ConfirmLocation');
          }}
          className="bg-[#00BCD4]"
          mode="contained">
          Submit
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    maxHeight: verticalScale(400),
  },
  map: {
    height: verticalScale(400),
  },
});

export default StartBookingScreen;
