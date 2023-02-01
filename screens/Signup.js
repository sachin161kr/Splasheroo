import React, {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Banner} from '../assets';
import {
  verticalScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {s} from 'react-native-wind';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={s`bg-white h-full`}>
      <View>
        <Image source={Banner} />
      </View>
      <View style={{margin: moderateVerticalScale(20)}}>
        <Text style={{fontSize: moderateVerticalScale(14)}}>
          Create Account
        </Text>
      </View>
      <View
        style={{margin: moderateVerticalScale(20)}}
        className="mt-10 px-4 text-white">
        <Button className="bg-[#00BCD4]" mode="elevated" onPress={() => {}}>
          Sign up with Email
        </Button>
      </View>
      <View
        style={{margin: moderateVerticalScale(20)}}
        className="mt-10 px-4 flex-row justify-center align-items-center relative top-10">
        <Text
          onPress={() => {
            navigation.navigate('StepForm');
          }}
          style={{margin: moderateVerticalScale(10)}}
          className="">
          Don’t have an account?
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{margin: moderateVerticalScale(10)}}
          className="font-bold ml-1">
          Log in
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
