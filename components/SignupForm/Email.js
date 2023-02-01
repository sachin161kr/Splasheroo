import {View, Text} from 'react-native';
import React from 'react';
import {ProgressBar, MD3Colors, TextInput, Button} from 'react-native-paper';

const Email = ({formData, setFormData}) => {
  return (
    <View>
      <View className="px-4 mt-5">
        <Text className="mt-5 text-[17px]">Enter Email</Text>
        <TextInput
          // label="Enter Email"
          value={formData.email}
          mode="outlined"
          className="bg-slate-100"
          onChangeText={email => {
            setFormData({...formData, email});
          }}
        />
      </View>
    </View>
  );
};

export default Email;
