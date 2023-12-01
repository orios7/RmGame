import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';

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
        <View>
            <Image source={{ uri: imageUri }} style={imageStyle} />
            <Text style={questionTextStyle}>{question}</Text>

            {answerOptions.map((option, index) => (
                <Button
                    key={index}
                    title={option}
                    onPress={() => handleButtonSelection(option)}
                    style={selectedAnswer === option && isCorrectAnswer ?
                        styles.correctButtonStyle
                        : selectedAnswer === option
                        && !isCorrectAnswer ? styles.incorrectButtonStyle : styles.buttonStyle}
                />
            ))}
        </View>
    );
};

export default QuestionComponent;


const styles = {
    imageStyle: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    questionTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    correctButtonStyle: {

    },
    incorrectButtonStyle: {

    }
};