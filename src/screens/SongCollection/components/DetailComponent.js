import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

export const DetailComponent = (props) =>{
    const {identifier, content} = props
    return(
        <View style={{
            display:'flex',
            margin: 8,
            flexDirection: 'row',
        }}>
            <Text style={{flex:1}}>{identifier}</Text>
            <Text style={{flex:3}}>: {content}</Text>
        </View>
    )
}
