import React, { FunctionComponent } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const RegularText: FunctionComponent<TextProps> = ({ style, children }) => {
    return <Text style={[styles.regularText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    regularText: {
        fontSize: 18,
    },
});

export default RegularText;
