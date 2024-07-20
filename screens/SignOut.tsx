// src/screens/SignOut.tsx
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Button, StyleSheet } from 'react-native';
import { RootStackParamList } from '../screens/navigation'; // Import the type

type Props = {
    navigation: NavigationProp<RootStackParamList, 'SignOut'>;
};

const SignOut: React.FC<Props> = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSignOut = async () => {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignOut;
