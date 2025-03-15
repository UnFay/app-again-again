import React from 'react';
import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import {userData} from '../ListProject/TryCodeData'
const Screen = () => {
    return (
        <View style={{ flex:1}}>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 8 }}
                renderItem={({ item }) => {
                    return (
                        <View style={[styleSheet.container, 
                            {backgroundColor:
                                item.gender.toLowerCase() === 'male'?
                                'moccasin'
                                :
                                'lavender'}
                        ]}>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )};

const styleSheet = StyleSheet.create({
    container:{
        margin:8,
        backgroundColor: 'lavender',
        borderWidth: 1
    }
})
export default Screen;
