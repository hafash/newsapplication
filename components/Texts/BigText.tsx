import React, { FunctionComponent } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const BigText: FunctionComponent<TextProps> = ({ style, children }) => {
    return <Text style={[styles.bigText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    bigText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default BigText;
