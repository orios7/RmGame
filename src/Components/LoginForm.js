import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, TextInput, View} from "react-native";

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
                                onChangeText={field.onChange('username')}
                                value={field.value}
                                placeholder="Username or Email"
                            />
                        )}
                    </Field>

                    <ErrorMessage name="username" component={Text} />

                    <Field name="password">
                        {({ field }) => (
                            <TextInput
                                onChangeText={field.onChange('password')}
                                value={field.value}
                                placeholder="Password"
                                secureTextEntry
                            />
                        )}
                    </Field>

                    <ErrorMessage name="password" component={Text} />

                    <Button title="Login" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};