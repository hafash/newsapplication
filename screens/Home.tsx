import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../screens/navigation';
import MainContainer from '../components/Containers/MainContainer';
type Props = {
    navigation: NavigationProp<any>;
};

const Home: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <MainContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Track Your Lost Documents</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Track Lost Documents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report')}>
                    <Text style={styles.buttonText}>Report Lost Document</Text>
                </TouchableOpacity>

                {/* Add more buttons or components as needed */}

            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Home;
