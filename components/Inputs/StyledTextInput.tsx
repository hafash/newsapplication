import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { TextInputProps, StyleProp, TextStyle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'; // Import necessary types
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SmallText from '../Texts/SmallText';
import SignUpScreen from '../../screens/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen';

const { primary, secondary, accent, black, gray } = colors;

// Define an interface that extends TextInputProps and includes style
interface StyledInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

const InputWrapper = styled.View`
  width: 100%;
  position: relative;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 2px;
  border-color: ${secondary};
  padding-right: 10px;
`;

const InputField = styled.TextInput`
  padding: 10px;
  padding-left: 50px;
  border-width: 1px;
  border-color: ${secondary};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${primary};
  margin-bottom: 10px;
  color: ${black};
`;

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 15px;
  z-index: 1;
`;

import { InputProps } from "./types"; // Importing the type at the top
const StyledTextInput: FunctionComponent<InputProps & StyledInputProps> = ({ icon, label, style, onFocus, onBlur, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
  const [hidePassword, setHidePassword] = useState(true);

  const customOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setInputBackgroundColor(secondary);
    if (onFocus) {
      onFocus(e); // Call onFocus with event argument
    }
  }

  const customOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setInputBackgroundColor(primary);
    if (onBlur) {
      onBlur(e); // Call onBlur with event argument
    }
  }

  return (
    <InputWrapper style={style}>
      <LeftIcon>
        <MaterialCommunityIcons name={icon} size={30} color={accent} />
      </LeftIcon>

      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor={gray}
        style={[{ backgroundColor: inputBackgroundColor }, style]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        secureTextEntry={isPassword && hidePassword}
      />

      {isPassword && <RightIcon onPress={() => {
        setHidePassword(!hidePassword);
      }}>
        <MaterialCommunityIcons name={hidePassword ? "eye-off" : "eye"}
          size={30}
          color={black} />

      </RightIcon>}

    </InputWrapper>
  );
};

export default StyledTextInput;
