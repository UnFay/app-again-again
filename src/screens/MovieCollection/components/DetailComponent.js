import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from '../MovieData'
import React from 'react';
import { useState, useEffect } from 'react';

export const DetailComponent = (props) =>{
    const {identifier, content} = props
    return(
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 15
        }}>
            <View style={{width: 90}}>
                <Text style={{textAlign:'left', fontWeight: 'bold'}}>{identifier} : </Text>
            </View>
            <View style={{width: 300}}>
                <Text >{content} </Text>
            </View>
        </View>
    )
}
