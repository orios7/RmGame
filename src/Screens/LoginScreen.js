import {StatusBar} from 'expo-status-bar';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {StyleSheet, Button, View, ImageBackground, Text, TextInput, Image} from 'react-native';

import React, {useState} from 'react';
import {LoginForm} from "../Components/LoginForm"; // Use to exit: BackHandler.exitApp();


export const LoginScreen = (navigation) => {
    const handleLogin = (values) => {
        // Whenever we get the login stuff here we go.
        console.log("Form Values were: ", values)
    }

    const [name, setName1] = useState('');
    const [pw, setName2] = useState('');

    return (


    <ImageBackground source={require('../Assets/RNM3.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
        <LoginForm onSubmit={handleLogin} />
            <Button
                style={styles.button}
                title="Login"

                onPress={() => navigation.navigate("Main", {language: "e"})}
            />
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    backgroundImage: {
        flex:1,
    },

    footerContainer: {
        flex: 1 / 1,
        alignItems: 'center',
    },

    textinput: {
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center',
        //borderWidth: 2,
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
        //Color: '#7fffd4',
        //borderColor: '#7fffd4',
        padding: 2
    },

    image: {
        flex: .5,
        justifyContent: 'center',
        resizeMode: 'cover'
    }
});

