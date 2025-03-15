import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export const Post = (props) =>{
    const {profile, username, post} = props;
    return(
        <View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#EDFAFF'
            }}>
                <View style={{alignSelf: 'flex-start', display: 'flex', flexDirection: 'row', flex: 1}}>
                    <Image source={profile} style={{
                        borderRadius: 100, width: 55, height: 55, marginHorizontal: 10
                    }}></Image>
                    <Text style={{marginHorizontal: 10, alignSelf: 'center', fontSize: 20}}>
                        {username}
                    </Text>
                </View>
                <Icon name={'dots-vertical'}  type={'material-community'} size={30} style={{marginRight: 10, alignSelf:'center'}} />
            </View>
            <Image source={post} style={{width: 400, height: 400, alignSelf:'center'}}/>
        </View>
    )
}