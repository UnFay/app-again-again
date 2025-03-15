import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
const ScrollScreen = () => {
    return (
    <View>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 20,
        }}>
            Pokemon Profiles
        </Text>
        <ScrollView>
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: "lightblue",
        color: 'darkslateblue',
        borderRadius: 30,
        }}>
            <Image style={{
                borderRadius: 100,
                borderColor: 'darkslateblue',
                borderWidth:2,
                width:150,
                height:150,
                margin:10,
                backgroundColor: 'aliceblue'
            }} source={require('../../screens/Meeting3/assets/pikachu.png')}/>
            <View style={{
                display: 'flex',
                flexDirection:'column',
                color: 'darkslateblue',
                justifyContent: 'center',
                
            }}>
                <Text style={{}}>
                    Name: Pikachu
                </Text>
                <Text>
                    Type: Electric
                </Text>
                <Text>
                    Moves: Thunderbolt, Iron Tail
                </Text>
                <Text>
                    Type weaknesses: Ground, Rock
                </Text>
            </View>
        </View>

        <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: "lightblue",
        color: 'darkslateblue',
        borderRadius: 30,
        }}>
            <Image style={{
                borderRadius: 100,
                borderColor: 'darkslateblue',
                borderWidth:2,
                width:150,
                height:150,
                margin:10,
                backgroundColor: 'aliceblue'
            }} source={require('../../screens/Meeting3/assets/flareon.png')}/>
            <View style={{
                display: 'flex',
                flexDirection:'column',
                color: 'darkslateblue',
                justifyContent: 'center',
                
            }}>
                <Text style={{}}>
                    Name: Flareon
                </Text>
                <Text>
                    Type: Fire
                </Text>
                <Text>
                    Moves: Flamethrower, Ember
                </Text>
                <Text>
                    Type weaknesses: Water, Rock
                </Text>
            </View>
        </View>

        <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: "lightblue",
        color: 'darkslateblue',
        borderRadius: 30,
        }}>
            <Image style={{
                borderRadius: 100,
                borderColor: 'darkslateblue',
                borderWidth:2,
                width:150,
                height:150,
                margin:10,
                backgroundColor: 'aliceblue'
            }} source={require('../../screens/Meeting3/assets/rapidash.png')}/>
            <View style={{
                display: 'flex',
                flexDirection:'column',
                color: 'darkslateblue',
                justifyContent: 'center',
                
            }}>
                <Text style={{}}>
                    Name: Rapidash
                </Text>
                <Text>
                    Type: Fire
                </Text>
                <Text>
                    Moves: Flamethrower, Ember
                </Text>
                <Text>
                    Type weaknesses: Water, Rock
                </Text>
            </View>
        </View>

        <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: "lightblue",
        color: 'darkslateblue',
        borderRadius: 30,
        }}>
            <Image style={{
                borderRadius: 100,
                borderColor: 'darkslateblue',
                borderWidth:2,
                width:150,
                height:150,
                margin:10,
                backgroundColor: 'aliceblue'
            }} source={{uri:'https://i.ibb.co/bLz74hj/psyduck.png'}}/>
            <View style={{
                display: 'flex',
                flexDirection:'column',
                color: 'darkslateblue',
                justifyContent: 'center',
                
            }}>
                <Text style={{}}>
                    Name: Psyduck
                </Text>
                <Text>
                    Type: Psychic
                </Text>
                <Text>
                    Moves: Tackle idk
                </Text>
                <Text>
                    Type weaknesses: idk actually
                </Text>
            </View>
        </View>
        
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: "lightblue",
        color: 'darkslateblue',
        borderRadius: 30,
        }}>
            <Image style={{
                borderRadius: 100,
                borderColor: 'darkslateblue',
                borderWidth:2,
                width:150,
                height:150,
                margin:10,
                backgroundColor: 'aliceblue'
            }} source={{uri:'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}/>
            <View style={{
                display: 'flex',
                flexDirection:'column',
                color: 'darkslateblue',
                justifyContent: 'center',
                
            }}>
                <Text style={{}}>
                    Name: Bulbasaur
                </Text>
                <Text>
                    Type: Grass
                </Text>
                <Text>
                    Moves: Vine whip
                </Text>
                <Text>
                    Type weaknesses: Electric, Fire
                </Text>
            </View>
        </View>
    </ScrollView>
    </View>
    
    
    )
};

export default ScrollScreen