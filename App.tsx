import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import SignOut from './screens/SignOut';
import Home from './screens/Home';
import { RootStackParamList } from './screens/navigation'; // Import the type
import ReportLostDocument from './screens/ReportLostDocument';
import SearchDocument from './screens/SearchDocument';
const Stack = createStackNavigator<RootStackParamList>(); // Use the type

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignOut" component={SignOut} />
        <Stack.Screen name="Report" component={ReportLostDocument} />
        <Stack.Screen name="Search" component={SearchDocument} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
