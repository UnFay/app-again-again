import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {DetailComponent} from './components/DetailComponent'
import { StarComponent } from './components/StarComponent';
const DetailScreen = (props) => {
    const { route } = props;
    const { title, year, writers, rating, image, genre, singers} = route.params;
    console.log(route.params)
return (
    <View style={{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        margin: 10
        }}>
        <Image source={{ uri: image }} style={{width:200, height:200, margin:8, borderWidth:2, borderColor: 'salmon', borderRadius:10}}/>
        <Text style={{
            fontWeight: 'bold',
            marginTop:8,
            marginBottom: 16,
            fontSize: 20
        }}>{title}</Text>
        <DetailComponent identifier='Singers' content={singers}/>
        <DetailComponent identifier='Year' content={year}/>
        <DetailComponent identifier='Genre' content={genre}/>
        <DetailComponent identifier='Songwriters' content={writers}/>
        <View style={{
            display:'flex',
            margin: 8,
            flexDirection: 'row',
        }}>
            <Text style={{flex:1}}>Rating</Text>
            <View style={{flex:3, flexDirection: 'row', display: 'flex'}}>
                <Text>: </Text>
                <StarComponent rating={rating}/>
            </View>
        </View>
    </View>
)};

const styles = StyleSheet.create({
});

export default DetailScreen;