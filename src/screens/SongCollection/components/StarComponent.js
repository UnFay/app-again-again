import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

export const StarComponent = (props) =>{
    const {rating} = props
    return(
        <View style={{
        }}>
            {rating === 5 ?
                <Image style={{width: 100,height: 20}} source={require('../assets/stars/five-stars.png')} />
                    : rating === 4 ?
                        <Image style={{width: 100,height: 20}} source={require('../assets/stars/four-stars.png')} />
                            : rating === 3 ?
                                <Image style={{width: 100,height: 20}} source={require('../assets/stars/three-stars.png')} />
                                    : rating === 2 ?
                                        <Image style={{width: 100,height: 20}} source={require('../assets/stars/two-stars.png')} />
                                            : <Image style={{width: 100,height: 20}} source={require('../assets/stars/star.png')} />
            }
        </View>
    )
}
