import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { useState, useEffect } from 'react';
import {ShowMovieComponent} from './components/ShowMovieComponent'

const MostViewedScreen = (props) => {
    const {route} = props;
    const movies = route.params.exportViews
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    useEffect(() => {

    }, []);
    return (
        <View style={styleSheet.mainContainer}>
            <Text style={styleSheet.listHeader}>Most viewed</Text>
            <FlatList
                vertical
                key={2}
                numColumns={2}
                height={500}
                data={movies}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styleSheet.smallContainerRow}
                alignItems = 'center'
                renderItem={({ item }) => {
                    <ShowMovieComponent title={item.title} image={item.imageLink} views={item.viewers}/>
                }}
                ListEmptyComponent={
                    <Text>Nothing here!</Text>
                }
            />
        </View>
    )
};

const styleSheet = StyleSheet.create({
    smallContainer: {
        margin: 8,
        padding: 8,
    },
    dataContainer: {
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 1
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    titleText: {
        color: 'white',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer: {
        paddingLeft: 20,
        textAlign: 'left',
        flex: 1,
        height: '100%',
        paddingVertical: 10
    },
    normalText: {
        color: '#cacbed'
    },
    dataContainerRow: {
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        padding: 8,
        display: 'flex',
        width: 180,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    listHeader: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    starStyle: {
        width: 150,
        height: 50
    },

    viewContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default MostViewedScreen;
