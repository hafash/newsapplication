import React, { FunctionComponent } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const SmallText: FunctionComponent<TextProps> = ({ style, children }) => {
    return <Text style={[styles.smallText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    smallText: {
        fontSize: 14,
    },
});

export default SmallText;
