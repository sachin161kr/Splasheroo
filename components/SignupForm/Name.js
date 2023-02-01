import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { ProgressBar, MD3Colors, TextInput, Button } from 'react-native-paper';

const Name = ({formData,setFormData}) => {
    const [drivingCheck, setDrivingCheck] = useState(false);
    return (
        <View>
            <View className="px-4 mt-5">
                <Text className="mt-5 text-[17px] mb-5">Full Name</Text>
                <TextInput
                    label="Enter Name"
                    value={formData.fullName}
                    mode="outlined"
                    className="bg-slate-100"
                    onChangeText={(fullName) =>  {
                        setFormData({...formData,fullName})
                    }}
                />
            </View>
        </View>
    )
}

export default Name;

