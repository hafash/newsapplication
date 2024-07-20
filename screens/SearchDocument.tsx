// src/screens/SearchDocument.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './navigation';

type Props = {
    navigation: NavigationProp<RootStackParamList>;
};

const SearchDocument: React.FC<Props> = ({ navigation }) => {
    const [idNumber, setIdNumber] = useState('');

    const handleSearch = () => {
        // Add logic to handle searching the document, e.g., fetch data from backend

        alert(`Searching for document with ID: ${idNumber}`);
        navigation.navigate('Search')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Document</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter ID Number"
                value={idNumber}
                onChangeText={setIdNumber}
            />
            <Button title="Search" onPress={handleSearch} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>

                <Text style={styles.buttonText}>Sign Out</Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
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
    button: {
        backgroundColor: '#1E90FF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '40%',
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,

    },
});

export default SearchDocument;
