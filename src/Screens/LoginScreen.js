import {StyleSheet, Button, View, ImageBackground, Text, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import RAMBackground from '../Assets/RNM.png'
import {LoginForm} from "../Components/LoginForm"; // Use to exit: BackHandler.exitApp();


export const LoginScreen = ({navigation}) => {
    const handleLogin = (values) => {
        // Whenever we get the login stuff here we go.
        console.log("Form Values were: ", values);
        navigation.navigate("Main", {language: "e"});
    }

    const [name, setName1] = useState('');
    const [pw, setName2] = useState('');

    return (


        <ImageBackground source={RAMBackground} style={styles.container}>
            <LoginForm onSubmit={handleLogin}/>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundImage: {},

    footerContainer: {
        flex: 1 / 1,
        alignItems: 'center',
    },
    textinput: {
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center',
        borderColor: '#7fffd4',
        margin: 10
    },
    text: {
        fontSize: 10,
        color: '#7fffd4'
    },
    text2: {
        fontSize: 20,
        color: '#7fffd4'
    },

    button: {
        flex: 1,
        borderWidth: 2,
        padding: 2
    },
    image: {
        flex: .5,
        justifyContent: 'center',
        resizeMode: 'cover'
    }
});

