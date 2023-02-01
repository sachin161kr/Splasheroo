import {View, Text} from 'react-native';
import React from 'react';
import {ProgressBar, MD3Colors, TextInput, Button} from 'react-native-paper';

const PhoneNumber = ({formData, setFormData}) => {
  return (
    <View>
      <View className="px-4 mt-5">
        <Text className="mt-5 text-[17px]">Enter Phone Number</Text>
        <TextInput
          value={formData.phoneNumber}
          mode="outlined"
          className="bg-slate-100"
          onChangeText={phoneNumber => {
            setFormData({...formData, phoneNumber});
          }}
        />
      </View>
    </View>
  );
};

export default PhoneNumber;
