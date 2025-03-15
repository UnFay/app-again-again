import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';

export const InputComponent = (props)=>{
    const {title, height, placeholder} = props;
    return(
        <View style={{marginTop: 10}}>
            <Text>
               {title}     
            </Text>
            <TextInput style={{
                borderColor: 'darkslateblue',
                borderWidth: 3,
                height: height,
                width: '100%',
                fontSize: 16
            }}
            placeholder={placeholder}
            multiline={true}
            keyboardType='default'>
            </TextInput>
        </View>
        
    )
}
