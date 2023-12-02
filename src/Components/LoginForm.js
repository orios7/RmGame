import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, TextInput, View, Text, StyleSheet} from "react-native";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .min(4),
    password: Yup.string()
        .required('Password is required')
        .min(6),
});

const initialValues = {
    username: '',
    password: '',
};

export const LoginForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (

                <View>
                    <Field name="username">
                        {({ field }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={field.onChange('username')}
                                value={field.value}
                                placeholder="Username or Email"
                            />
                        )}
                    </Field>

                    <ErrorMessage style={styles.error} name="username" component={Text} />

                    <Field name="password">
                        {({ field }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={field.onChange('password')}
                                value={field.value}
                                placeholder="Password"
                                secureTextEntry
                            />
                        )}
                    </Field>

                    <ErrorMessage style={styles.error} name="password" component={Text} />

                    <Button
                        style={styles.button}
                        title="Login"
                        onPress={handleSubmit}  />
                </View>

            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#007bff',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 15,
        width: 250
    },
    error: {
        color: 'red',
        fontSize: 14,
        backgroundColor: '#eee',
        opacity: 0.7,
    },
    button: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});