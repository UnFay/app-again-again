import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,
StyleSheet } from 'react-native';
import { songData } from './data/SongData';
import {StarComponent} from './components/StarComponent'
const HomeScreen = (props) => {
    const [songs, setSongs] = useState([]);
    const { navigation } = props;

    useEffect(() => {
        setSongs(songData);
    })
return (
    <View>
        <FlatList
        vertical
        data={songs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
            return (
                <View style={styles.songContainer}>
                    <Image source={{ uri: item.imageLink }} style={styles.imageStyle}/>
                    <View style={styles.littleContainer}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                        <Text style={styles.descStyle}>{item.songwriters}</Text>
                        <StarComponent rating = {item.rating}/>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SongDetails', {title: item.title, writers: item.songwriters, image: item.imageLink, rating: item.rating, genre: item.genre, year: item.year, singers: item.singer})}>
                            <Text style={styles.buttonText}>SEE DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }}
        />
    </View>
)};

const styles = StyleSheet.create({
    listContainer:{

    },
    songContainer:{
        display: 'flex',
        margin: 8,
        padding:8,
        borderWidth: 2,
        borderColor: '#A6A6BD',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle:{
        width: 120,
        height: 120,

    },
    littleContainer:{
        flex: 1,
        marginLeft: 8,
    },
    buttonStyle:{
        borderColor: '#A6A6BD',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#AFCAE8',
        padding: 8,
        width: 100,
        marginTop: 8
    },
    buttonText:{
        color: 'white'
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    descStyle:{
        marginBottom: 8,
        marginTop: 8
    },

});

export default HomeScreen;