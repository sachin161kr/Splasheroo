import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  verticalScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Banner} from '../assets';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Image source={Banner} />
        </View>
        <View>
          <Text style={{margin: moderateVerticalScale(20)}}>
            Sign in to your account
          </Text>
        </View>
        <View style={{margin: moderateVerticalScale(10)}}>
          <TextInput
            label="Email Address"
            value={email}
            mode="outlined"
            className="bg-slate-100"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{margin: moderateVerticalScale(10)}}>
          <TextInput
            label="Password"
            value={password}
            mode="outlined"
            className="bg-slate-100"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Text style={{margin: moderateVerticalScale(10)}}>
          Forget password?
        </Text>
        <View className="mt-10 px-4 text-white">
          <Button
            style={{margin: 10}}
            onPressIn={() => {
              navigation.navigate('StartBooking');
            }}
            mode="elevated"
            onPress={() => {}}>
            Book Now!
          </Button>
        </View>

        <TouchableOpacity
          onPressIn={() => {
            navigation.navigate('Signup');
          }}
          style={{margin: moderateVerticalScale(20)}}>
          <Text className="">Don’t have an account?</Text>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;
