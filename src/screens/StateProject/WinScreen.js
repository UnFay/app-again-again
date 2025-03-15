import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { countryList, objectImageList, objectNameList } from './Data';
import { ImageBackground } from 'react-native';
const WinScreen = (props)=> {
    const {navigation} = props;
    return (
        <View >
            <ImageBackground source={{uri:'https://wallpaperaccess.com/full/154959.jpg'}} style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', flex: 1}}
            imageStyle={{opacity:0.4}} >
                <Text style={{margin:50}}>You win!!!!!!!!!!!!!</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'blue',
                    borderRadius: 30,
                }}
                onPress={()=> navigation.navigate('Home')}>
                    <Text style={{fontSize: 25}}>Play again</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )};
    export default WinScreen;