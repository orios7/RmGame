import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const QuestionComponent = ({ question, imageUri, answerOptions, correctAnswer, handleAnswerSelection }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    const handleButtonSelection = (option) => {
        setSelectedAnswer(option);
        handleAnswerSelection(option);

        if (option === correctAnswer) {
            setIsCorrectAnswer(true);
        } else {
            setIsCorrectAnswer(false);
        }
    };

    useEffect(() => {
        if (isCorrectAnswer) {
            const timeoutId = setTimeout(() => {
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [isCorrectAnswer]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.imageStyle} />

            {answerOptions.map((option, index) => (
                <Button
                    key={index}
                    title={option}
                    onPress={() => handleButtonSelection(option)}
                    style={selectedAnswer === option && isCorrectAnswer
                        ? styles.correctButtonStyle
                        : selectedAnswer === option && !isCorrectAnswer
                            ? styles.incorrectButtonStyle
                            : styles.buttonStyle}
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