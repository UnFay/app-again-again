import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { countryList, objectImageList, objectNameList } from './Data';
const GuessTheCountryScreen = (props) => {
const [answer, SetAnswer] = useState();
const [index, SetIndex] = useState();
const [result, setResult] = useState();
const [score, setScore] = useState(4);
const {navigation} = props;
const randomIndex = () =>{
    const randomIndex = Math.floor(Math.random() * countryList.length);
    SetIndex(randomIndex);
}
const CheckAnswer = () =>{
    if (answer.toLowerCase() === countryList[index]){
        setResult('Yesss you got it!!!!');
        setScore(score + 1);
    }else{
        setResult('You got it wrong!!!');
    }
    setTimeout(()=> {
        setResult('');
        randomIndex();
        SetAnswer('')
    }, 1000);
}
useEffect(() => {
    randomIndex();
    if (score === 5){
        navigation.navigate('Win')
    }
}, [score]);
return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Text style={{
            textDecorationLine: 'underline',
            fontSize: 28,
            fontFamily: 'serif',
            marginBottom: 16
        }}>
        Guess The Country
        </Text>
        <Image style={{
            width: 250,
            height: 250,
            borderRadius: 10
            }}
            source={{uri: objectImageList[index]}}
        />
        <View style={{
            margin: 8,
            backgroundColor: 'lavender',
            padding: 4,
            borderWidth: 1
        }}>
            <Text style={{ fontSize: 18 }}>
                {objectNameList[index]}
            </Text>
        </View>

        <View style={{
            flexDirection: 'row',
            margin: 8
        }}>
            <TextInput
                style={{
                    borderWidth: 1,
                    width: '50%',
                }}
                value={answer}
                placeholder="Write your answer"
                onChangeText={(text) => SetAnswer(text)}
            />
            <TouchableOpacity style={{
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: 8,
                marginLeft: 8,
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: 'skyblue'
            }}
            onPress={()=> CheckAnswer()}>
                <Text style={{ fontSize: 18 }}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
        <Text>
            {result}
        </Text>
        <Text style={{backgroundColor: '#ffc7f4', borderWidth: 1, borderRadius: 10, padding: 10}}>
            Score: {score}
        </Text>
    </View>
)};

export default GuessTheCountryScreen