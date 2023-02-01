import React, {useLayoutEffect} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const ConfirmLocation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.head}>Confirm Location</Text>
          <Text style={styles.text}>
            Please let us know your exact address so we can collect the key!
          </Text>
          <Text style={styles.subhead}>Postcode</Text>
          <View style={styles.struct1}>
            <TextInput
              style={{
                width: scale(180),
                marginLeft: scale(20),
                marginRight: scale(10),
              }}
            />
            <Button
              style={{flex: 1, marginRight: scale(20)}}
              className="bg-[#00BCD4]"
              mode="contained">
              Find Address
            </Button>
          </View>
          <Text style={styles.subhead}>Address</Text>
          <View>
            <TextInput
              style={{marginHorizontal: scale(20)}}
              placeholder="First Enter Postcode above"
            />
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Text
                  style={{
                    marginRight: scale(20),
                    marginTop: verticalScale(10),
                  }}>
                  Enter Address Manually
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.subhead}>Notes</Text>
            <TextInput
              style={{
                height: verticalScale(250),
                margin: moderateVerticalScale(20),
              }}
              placeholder="Any extra information that will help us find your car easily"
            />
          </View>
          <View style={{paddingHorizontal: scale(20)}}>
            <Button className="bg-[#00BCD4]" mode="contained">
              Confirm Location
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ConfirmLocation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  head: {
    marginTop: verticalScale(20),
    marginLeft: scale(20),
    fontSize: moderateVerticalScale(18),
  },
  subhead: {
    marginTop: verticalScale(16),
    marginLeft: scale(20),
    fontSize: moderateVerticalScale(16),
  },
  text: {
    marginTop: verticalScale(5),
    fontSize: moderateVerticalScale(15),
    paddingHorizontal: scale(20),
  },
  struct1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
