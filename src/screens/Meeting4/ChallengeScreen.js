import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import {InputComponent} from '../Meeting4/components/InputComponent';
const ChallengeScreen = () =>{
    return(
        <ScrollView>
             <View style={{

        }}>
            <ImageBackground style={{
                width:'100%',
                height: '100%',
            }}
            imageStyle={{
                alignSelf:'center',
                width: '100%',
                height: '100%'
            }}
            source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}>
            <View style={{alignSelf:'flex-start', width: '90%', alignItems: 'center', justifyContent:'center'}}>
                <Text style={{
                    backgroundColor: 'mistyrose',
                    margin: 10,
                    padding: 10,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end'
                }}>
                    Colosseum
                </Text>
                <InputComponent height={100} placeholder='Write a description of the place' title='Description'/>
               <InputComponent height={50} placeholder='Write down your phone number' title= 'Phone number'/>
               <InputComponent height={50} placeholder='Write down the location of this place' title= 'Location'/>
            </View>
            </ImageBackground>
            
        </View>
        </ScrollView>
       
    )
}

export default ChallengeScreen