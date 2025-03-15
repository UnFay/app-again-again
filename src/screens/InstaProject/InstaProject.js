import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import {Post} from './PostComponent'

const InstagramHomeScreen = () => {
return (
    <View style={{ flex: 1 , backgroundColor: '#80B8FF'}}>
        <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
        }}>

        <Text style={{
        fontFamily: 'StyleScript-Regular',
        fontSize: 40, marginLeft: 16
        }}>
        Instagram
        </Text>

            <View style={{
            flexDirection: 'row',
            alignItems: 'center', marginRight: 8
            }}>
                
                    <Icon name='plus-square-o'
                    type='font-awesome' size={26} style={{margin: 6}}
                    />
                    <Icon name='paper-plane-outline'
                    type='ionicon' size={26} style={{margin: 6}}
                    />
                    <Icon name='heart-o'
                    type='font-awesome' size={26} style={{margin: 6}}
                    />
            </View>
        </View>
        <ScrollView>
        <Post profile={require('../../screens/InstaProject/assets/profilePicture1.png')} username={'UltraMegaCool3000'} post={require('../../screens/InstaProject/assets/franch.png')}/>
        <Post profile={require('../../screens/InstaProject/assets/profilePicture1.png')} username={'UltraMegaCool3000'} post={require('../../screens/InstaProject/assets/franch.png')}/>
        <Post profile={require('../../screens/InstaProject/assets/profilePicture1.png')} username={'UltraMegaCool3000'} post={require('../../screens/InstaProject/assets/franch.png')}/>
        <Post profile={require('../../screens/InstaProject/assets/profilePicture1.png')} username={'UltraMegaCool3000'} post={require('../../screens/InstaProject/assets/franch.png')}/>
        </ScrollView>
        
    </View >
)};
export default InstagramHomeScreen;