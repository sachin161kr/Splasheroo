import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ProgressBar,
  MD3Colors,
  TextInput,
  Button,
  Checkbox,
} from 'react-native-paper';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Name from '../components/SignupForm/Name';
import Email from '../components/SignupForm/Email';
import Password from '../components/SignupForm/Password';
import PhoneNumber from '../components/SignupForm/PhoneNumber';
import PostCode from '../components/SignupForm/PostCode';

import {moderateVerticalScale} from 'react-native-size-matters';

const StepForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    postCode: '',
    address: '',
    phoneNumber: '',
  });
  const [selectScreen, setSelectScreen] = useState(0);
  const [progressValue, setProgressValue] = useState(0.1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [drivingCheck, setDrivingCheck] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const {fullName, email, password, postCode, address, phoneNumber} = formData;
  const formTitles = [
    'Name',
    'Email',
    'Password',
    'Post Code',
    'Phone Number',
    'Confirmation',
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('StepForm');
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  const ConfirmationWindow = () => {
    return (
      <View className="px-4 mt-5">
        <Text>Check box</Text>
      </View>
    );
  };

  const screenDisplay = () => {
    if (selectScreen === 0) {
      return <Name formData={formData} setFormData={setFormData} />;
    } else if (selectScreen === 1) {
      return <Email formData={formData} setFormData={setFormData} />;
    } else if (selectScreen === 2) {
      return <Password formData={formData} setFormData={setFormData} />;
    } else if (selectScreen === 3) {
      return <PostCode formData={formData} setFormData={setFormData} />;
    } else if (selectScreen === 4) {
      return <PhoneNumber formData={formData} setFormData={setFormData} />;
    } else if (selectScreen === 5) {
      return <ConfirmationWindow />;
    }
  };

  const handleNext = () => {
    setSelectScreen(selectScreen + 1);
    setProgressValue(progressValue + 0.2);
  };

  const handlePrevios = () => {
    setSelectScreen(selectScreen - 1);
    setProgressValue(progressValue - 0.2);
  };

  useEffect(() => {
    if (!fullName) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [formData]);

  const handleSubmit = () => {
    navigation.navigate('StartBooking');
  };

  return (
    <SafeAreaView className="px-4 mt-5 h-full w-full relative">
      <View
        style={{margin: moderateVerticalScale(20)}}
        className="flex-row px-4 items-center">
        {selectScreen > 0 && (
          <Text
            style={{margin: moderateVerticalScale(5)}}
            onPress={handlePrevios}>
            Back
          </Text>
        )}
        <Text
          style={{margin: moderateVerticalScale(5)}}
          className="text-lg ml-20">
          Create Account
        </Text>
      </View>
      <View style={{margin: moderateVerticalScale(20)}} className="mt-5 px-4">
        <ProgressBar progress={progressValue} color="#00BCD4" />
      </View>
      <View style={{margin: moderateVerticalScale(20)}}>
        <Text className="text-center mt-2">{formTitles[selectScreen]}</Text>
      </View>

      <View style={{margin: moderateVerticalScale(20)}}>{screenDisplay()}</View>

      <View
        style={{margin: moderateVerticalScale(20)}}
        className="absolute w-full bottom-24 px-4 text-white">
        {selectScreen < 5 ? (
          <Button
            disabled={buttonDisabled}
            className="bg-[#00BCD4]"
            mode="contained"
            onPress={handleNext}>
            Next
          </Button>
        ) : (
          <Button
            className="bg-[#00BCD4]"
            mode="contained"
            onPress={handleSubmit}>
            Submit
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StepForm;
