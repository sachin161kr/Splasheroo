import { View, Text } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors, TextInput, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'


const PostCode = ({ formData, setFormData }) => {
    const data = [
        { key: '1', value: 'Mobiles' },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers' },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return (
        <View>
            <View className="px-4 mt-5">
                <Text className="mt-5 text-[17px]">Enter Post Code</Text>
                <View className="mt-3 flex-row justify-between items-center">
                    <View className="w-60">
                        <TextInput
                            mode="outlined"
                            label="Pincode"
                            className="bg-slate-100"
                            value={formData.postCode}
                            placeholder="Type something"
                            onChangeText={(postCode) => {
                                setFormData({ ...formData, postCode })
                            }}
                        />
                    </View>
                    <View className="w-35">
                        <Button className="relative bottom-0 bg-[#00BCD4] border-none " mode="contained" onPress={() => console.log('Pressed')}>
                            Search
                        </Button>
                    </View>
                </View>
                <View className="mt-5">
                <SelectList
                    setSelected={(address) => { 
                        setFormData({...formData,address})
                    }}
                    data={data}
                    save="value"
                /> 
                </View>
            </View>
        </View>
    )
}

export default PostCode;

