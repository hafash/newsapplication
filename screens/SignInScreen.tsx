
import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native'; // Import the NavigationProp type
import MainContainer from '../components/Containers/MainContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import BigText from '../components/Texts/BigText';
import RegularText from '../components/Texts/RegularText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';

import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({

    linkText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

// Define the type for navigation prop
type Props = {
    navigation: NavigationProp<any>; // Adjust `any` to your specific navigator type if known
};

export default function SignInScreen({ navigation }: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigateToSignUp = () => {
        navigation.navigate('SignUp'); // Navigate to SignUp screen
    }

    return (
        <MainContainer>
            <BigText>Welcome</BigText>
            <RegularText>Sign In to Your Account</RegularText>

            <StyledTextInput
                label="UserName"
                icon="account"
                value={username}
                onChangeText={setUsername}
                placeholder="Example: Germain"
                style={{ marginBottom: 20 }}
            />

            <StyledTextInput
                label="Password"
                icon="lock-open"
                value={password}
                onChangeText={setPassword}
                placeholder="*****"
                isPassword={true}
                style={{ marginBottom: 20 }}
            />

            <RegularButton onPress={() => {
                navigation.navigate('Search')
                // alert("Sign In Button Pressed");
            }}>Sign In</RegularButton>


            <TouchableOpacity onPress={navigateToSignUp}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>

        </MainContainer>
    );


}







