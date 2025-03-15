import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import {ItemComponent} from '../MiddleTest/components/ItemComponent';
const MiddleTestScreen = () =>{
    return(
        <View style={{display:'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
            <View style={{backgroundColor: 'white', padding: 16, display:'flex', width: '100%'}}>
                <Text style={{textDecorationLine: 'underline', fontSize: 30, fontFamily: 'serif', textAlign:'center'}}>SOLAR SYSTEM</Text>
            </View>
            <ScrollView style={{flex: 1, display:'flex', flexDirection: 'column', width: '95%'}}>
                <ItemComponent name='Mercury' desc='Mercury is the fastest planet, zipping around the Sun every 88 Earth days' image={require('../MiddleTest/assets/mercury.png')}/>
                <ItemComponent name='Venus' desc='Venus spins slowly in the opposite direction from most planets' image='../MiddleTest/assets/venus.png'/>
                <ItemComponent name='Earth' desc="Earth is the only place we know of so far that's inhabited by living things" image='../MiddleTest/assets/earth.png'/>
                <ItemComponent name='Mars' desc='Mars is a dusty, cold, desert world with a very thin atmosphere' image='../MiddleTest/assets/mars.png'/>
                <ItemComponent name='Jupiter' desc='Jupiter is more than twice as massive than the other planets of our solar system combined' image='../MiddleTest/assets/jupiter.png'/>
                <ItemComponent name='Saturn' desc='Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system' image='../MiddleTest/assets/saturn.png'/>
                <ItemComponent name='Uranus' desc='Uranus rotates at a nearly 90-degree angle from the plane of its orbit' image={require('../MiddleTest/assets/uranus.png')}/>
                <ItemComponent name='Neptune' desc='Neptune is dark, cold, and whipped by supersonic winds' image='../MiddleTest/assets/neptune.png'/>
            </ScrollView>
        </View>
    )
}
export default MiddleTestScreen