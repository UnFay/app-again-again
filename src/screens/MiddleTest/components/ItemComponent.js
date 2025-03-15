import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image } from 'react-native';


export const ItemComponent = (props)=>{
    const openAlert = () => {
        alert("You pressed "+name+"!");
        };
    const {name, desc, image} = props;
    return(
        <TouchableOpacity
        style={{
            borderRadius: 10,
            borderColor: 'green',
            borderWidth: 2,

            padding: 10,
            margin: 20,
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            backgroundColor: 'wheat'
        }}
        onPress={openAlert}>
            <Image source={{image}} style={{margin: 5, height: 100, width: 100}} />
            <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, }}>
                    {name}
                </Text>
                <Text style={{fontSize: 15}}>
                    {desc}
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}

