import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const openAlert = () => {
    alert('You clicked the button. (⊙_⊙)');
    };
const FirstScreen = ( )=> {
    return (
        <View>
            <Text style={{ margin:50, textAlign:'center' ,justifyContent:'center' }}>
                Hello
            </Text>
            
            <TouchableOpacity 
            style={{
                backgroundColor:'darkslateblue', 
                padding:20, 
                borderWidth: 1, 
                borderRadius: 5, 
                borderColor:'blue',
                color: 'bisque'
            }}
            onPress= {openAlert}>
            <Text>Button :)</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const ChallengeScreen = ( )=> {
    return (
        <View>
            <Text style={{ margin:50, textAlign:'center' ,justifyContent:'center' }}>
                Hello {"\n"}
                My name is
                <Text style={{color:'blue', fontWeight: 'bold', padding:20}}> Fay </Text>{"\n"}
                Unfortunately I don't know how to put placeholder lorem text in here
            </Text>   
            
            <TouchableOpacity 
            style={{
                backgroundColor:'darkslateblue', 
                padding:20, 
                borderWidth: 1, 
                borderRadius: 10, 
                borderColor:'blue',
                margin: 30,
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            onPress= {openAlert}>
            <Text  style={{color:'bisque'}}>Button :)</Text>
            </TouchableOpacity>

            <Text style={{margin:50, textAlign:'center', fontStyle: 'italic',justifyContent:'center', color:'darkblue', borderWidth:1, borderRadius:10,  borderColor:'darkslateblue', backgroundColor: 'lavender', padding:30}}>
                lorem ipsum?? dolor something???
            </Text>
        </View>
    )
}
const ChallengeScreen2 = () => {
    return (
    <View style={{
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'floralwhite'
    }}>
    <View>
    <Text  style={{
        fontWeight:'bold',
        fontSize:15,
        color: 'blue',
        textDecorationLine: 'underline'
    }}>
    iOS
    </Text>
    </View>
    <View>
    <Text style={{
        backgroundColor: 'lightblue',
        borderColor: 'darkslateblue',
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
        borderStyle: 'dotted',
        padding: 30,
        color: 'darkslateblue'
    }}>
    iOS (formerly iPhone OS) is a mobile operating
    system created and developed by <Text style={{fontWeight:'bold',fontStyle:'italic'}}>Apple Inc</Text>.
    exclusively for its hardware. It is the operating
    system that powers many of the company’s mobile
    devices, including the iPhone and iPod Touch.
    
    </Text>
    </View>
    <View>
    <Text>
    VS.
    </Text>
    </View>
    <View>
    <Text style={{
        fontWeight:'bold',
        fontSize:15,
        color: 'green',
        textDecorationLine: 'underline'
    }}>
    Android
    </Text>
    </View>
    <View>
    <Text style={{
        backgroundColor: 'lavender',
        borderColor: 'darkslateblue',
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
        borderStyle: 'dotted',
        padding: 30,
        color: 'darkslateblue'
    }}>
    Android is a mobile operating system based on a
    modified version of the Linux kernel and other open
    source software, designed primarily for
    touchscreen mobile devices such as smartphones and
    tablets. Android is developed by a consortium of
    developers known as the<Text style={{fontWeight:'bold',fontStyle:'italic'}}> Open Handset Alliance</Text> and
    commercially sponsored by <Text style={{fontWeight:'bold',fontStyle:'italic'}}>Google</Text>.
    
    </Text>
    </View>
    </View>
    )
    };

    
    
// export default FirstScreen
export default ChallengeScreen2