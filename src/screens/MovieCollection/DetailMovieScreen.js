import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from './MovieData';
import { useState, useEffect } from 'react';
import {DetailComponent} from './components/DetailComponent';
import {StarComponent} from './components/StarComponent'

const DetailMovieScreen = (props) => {
    const { route } = props;
    const { title, year, description, starring, viewers, rating, imageLink } = route.params;
    const movie = route.params.item;
    useEffect(()=>{
        console.log(title)
    })

    return (
        <View style={styles.mainContainer}>
        <View style={styles.movieContainer}>
            <View style={styles.middle}>
                <Image
                    style={styles.image}
                    source={{ uri: imageLink }}
                />
            </View>
            <DetailComponent identifier='Title' content={title}/>
            <DetailComponent identifier='Year' content={year}/>
            <DetailComponent identifier='Starring' content={starring}/>
            <DetailComponent identifier='Description' content={description}/>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 90}}>
                    <Text style={{textAlign:'left', fontWeight: 'bold'}}>Rating : </Text>
                </View>
                <StarComponent rating={rating}/>
            </View>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    movieContainer: {
        margin: 8,
        padding: 8
    },
    middle: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ffbe7bff',
        marginBottom: 15
    }
});
export default DetailMovieScreen;
