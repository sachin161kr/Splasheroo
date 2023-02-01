import {View, Text} from 'react-native';
import React from 'react';
import {ProgressBar, MD3Colors, TextInput, Button} from 'react-native-paper';

const Password = ({formData, setFormData}) => {
  return (
    <View>
      <View className="px-4 mt-5">
        <Text className="mt-5 text-[17px]">Enter Password</Text>
        <TextInput
          value={formData.password}
          mode="outlined"
          className="bg-slate-100"
          onChangeText={password => {
            setFormData({...formData, password});
          }}
        />
      </View>
    </View>
  );
};

export default Password;
