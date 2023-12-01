import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const QuestionComponent = ({ question, imageUri, answerOptions, correctAnswer, handleAnswerSelection, isCorrectAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleButtonSelection = (option) => {
        setSelectedAnswer(option)
        handleAnswerSelection(option);
    };


    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.imageStyle} />

            {answerOptions.map((option, index) => (
                <Button
                    key={index}
                    title={option}
                    onPress={() => handleButtonSelection(option)}
                    style={
                        selectedAnswer === option && correctAnswer
                            ? styles.correctButtonStyle
                            : selectedAnswer === option && !correctAnswer
                                ? styles.incorrectButtonStyle
                                : !selectedAnswer
                                    ? styles.buttonStyle
                                    : styles.buttonStyle
                    }
                />
            ))}
        </View>
    );
};

export default QuestionComponent;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    imageStyle: {
        flex: 2,
        resizeMode: 'cover',
    },
    questionTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    buttonStyle: {
        // flex: 2,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    correctButtonStyle: {
        backgroundColor: '#00ff00',
        borderColor: '#00ff00',
    },
    incorrectButtonStyle: {
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
    },
});