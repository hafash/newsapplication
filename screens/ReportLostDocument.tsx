// src/screens/ReportLostDocument.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './navigation';

type Props = {
    navigation: NavigationProp<RootStackParamList>;
};

const ReportLostDocument: React.FC<Props> = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [description, setDescription] = useState('');

    const handleReport = () => {
        // Add logic to handle reporting the lost document, e.g., send data to backend
        alert('Document reported successfully');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report Lost Document</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="ID Number"
                value={idNumber}
                onChangeText={setIdNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <Button title="Report" onPress={handleReport} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default ReportLostDocument;
