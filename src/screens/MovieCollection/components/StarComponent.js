import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

export const StarComponent = (props) =>{
    const {rating} = props
    return(
        <View style={{
        }}>
            {rating === 5 ?
                <Image style={{width: 150,height: 50}} source={require('../assets/5s.png')} />
                    : rating === 4 ?
                        <Image style={{width: 150,height: 50}} source={require('../assets/4s.png')} />
                            : rating === 3 ?
                                <Image style={{width: 150,height: 50}} source={require('../assets/3s.png')} />
                                    : rating === 2 ?
                                        <Image style={{width: 150,height: 50}} source={require('../assets/2s.png')} />
                                            : <Image style={{width: 150,height: 50}} source={require('../assets/1s.png')} />
            }
        </View>
    )
}
