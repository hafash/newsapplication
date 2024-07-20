import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native'; // Import the NavigationProp type
import MainContainer from '../components/Containers/MainContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import BigText from '../components/Texts/BigText';
import RegularText from '../components/Texts/RegularText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';


// Define the type for navigation prop
type Props = {
    navigation: NavigationProp<any>; // Adjust `any` to your specific navigator type if known
};

export default function SignUpScreen({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [retype, setRetype] = useState("");

    const handleSignUp = () => {
        alert("Are you sure you want to continue?");
        navigation.navigate('SignIn'); // Navigate to 'SignIn' screen after signing up
    };

    return (
        <MainContainer>
            <BigText>Welcome</BigText>
            <RegularText></RegularText>
            <SmallText style={{ marginBottom: 20 }}>Register</SmallText>

            <StyledTextInput
                label="UserName"
                icon="account"
                value={fullName}
                onChangeText={setFullName}
                placeholder="Example: Germain"
                style={{ marginBottom: 20 }}
            />

            <StyledTextInput
                label="Email Address"
                icon="email-variant"
                value={email}
                onChangeText={setEmail}
                placeholder="Germain@gmail.com"
                keyboardType="email-address"
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

            <StyledTextInput
                label="Retype Password"
                icon="lock"
                value={retype}
                onChangeText={setRetype}
                placeholder="Repeat password"
                isPassword={true}
                style={{ marginBottom: 20 }}
            />

            <RegularButton onPress={handleSignUp}>Sign Up</RegularButton>
        </MainContainer>
    );
}
