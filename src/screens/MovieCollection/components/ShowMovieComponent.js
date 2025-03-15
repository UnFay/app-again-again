import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from '../MovieData'
import React from 'react';
import { useState, useEffect } from 'react';

export const ShowMovieComponent = (props) =>{
    const {title,image, views} = props
    return(
            <View style={styleSheet.dataContainerRow}>
                <Image source={{ uri: image }} style={styleSheet.movieImageRow} />
                    <View style={styleSheet.textContainerRow}>
                        <Text style={styleSheet.titleTextRow}>{title}</Text>
                        <View style={styleSheet.viewContainer}>
                            <Icon name='eyeo' type='antdesign' color={'white'} size={20} style={{ marginRight: 10 }} />
                            <Text style={styleSheet.normalText}>{numberWithCommas(views)}</Text>
                        </View>
                    </View>
            </View>
    )
    
};
const styleSheet = StyleSheet.create({
    dataContainerRow: {
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        width: 150,
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainerRow: {
        textAlign: 'center',
        flex: 1,
        height: '100%',
        paddingVertical: 10
    },
    movieImageRow: {
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    titleTextRow: {
        color: 'white',
        marginBottom: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#cacbed'
    },
    viewContainer: {
        display: 'flex',
        flexDirection: 'row'
    },


})


