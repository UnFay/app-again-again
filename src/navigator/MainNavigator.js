import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/SongCollection/HomeScreen'
import DetailScreen from '../screens/SongCollection/DetailScreen'

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Song Collection',
          headerTitleStyle:{
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center'
          },
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#CAB0C3',
          }
          }}
      />
      <Stack.Screen
        name="SongDetails"
        component={DetailScreen}
        options={{
          title: 'Song Details',
          headerTitleStyle:{
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#CAB0C3'
          },
          headerLeft: null
          }}
      />
    </Stack.Navigator>
  );
};
export default MainNavigator;