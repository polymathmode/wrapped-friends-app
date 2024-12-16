import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddPhotoInitial } from './components/screens/AddPhotoInitial';
import { AddPhotoSelected } from './components/screens/AddPhotoSelected';
import { InviteFriends } from './components/screens/InviteFriends';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AddPhotoInitial" component={AddPhotoInitial} />
        <Stack.Screen name="AddPhotoSelected" component={AddPhotoSelected} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}