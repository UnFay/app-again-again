import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import {InputComponent} from '../Meeting4/components/InputComponent';
const FourthScreen = () =>{
    return(
        <ScrollView>
             <View style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',

        }}>
            <ImageBackground style={{
                width:'100%',
                height: 300,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                margin:10
            }}
            imageStyle={{
                borderRadius:10,
                alignSelf:'center',
                width: '100%'
            }}
            source={{uri:'https://wallpaperaccess.com/full/250180.jpg'}}>
                <Text style={{
                    backgroundColor: 'mistyrose',
                    margin: 10,
                    padding: 10,
                    fontWeight: 'bold'
                }}>
                    Disneyland
                </Text>
                
            </ImageBackground>
            <View style={{alignSelf:'flex-start', width: '100%'}}>
                <InputComponent height={100} placeholder='Write a description of the place' title='Description'/>
               <InputComponent height={50} placeholder='Write down your phone number' title= 'Phone number'/>
               <InputComponent height={50} placeholder='Write down the location of this place' title= 'Location'/>
            </View>
            
        </View>
        </ScrollView>
       
    )
}

export default FourthScreen