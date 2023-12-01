import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import {getTriviaQuestion} from "../API/RANDMApi";
import QuestionComponent from '../Components/QuestionComponent';

const QuizScreen = () => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [round, setRound] = useState(1);
    const [score, setScore] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

    const fetchQuestions = async () => {
        let randomChoice = Math.floor(Math.random() * 4)
        let fourCharacters = await getTriviaQuestion();
        let selectedQuestion = fourCharacters[randomChoice]
        setQuestions(fourCharacters.map(character => character.name))
        setCorrectAnswer(selectedQuestion)
    };



    // set score but need to change how it lets people know / store their score.
    const handleAnswerSelection = (option) => {
        if (option === correctAnswer.name) {
            setScore(score + 1);
            setIsCorrectAnswer(true);
        } else {
            setScore(score - 1);
            setIsCorrectAnswer(false);
        }

        if (round < 10) {
            setRound(round + 1);
            fetchQuestions();
        } else {
            // Quiz is complete
            alert(`You scored ${score} out of 10!`);
        }

        const timeoutId = setTimeout(() => {
            setIsCorrectAnswer(false);
        }, 5000); // Set delay to 5 seconds

        return () => clearTimeout(timeoutId); // Clear timeout on unmount
    };

    useEffect(() => {
        fetchQuestions();
    }, []);
    //
    // useEffect(() => {
    //     if (isCorrectAnswer === true) {
    //         const timeoutId = setTimeout(() => {
    //             setIsCorrectAnswer(false);
    //         }, 5000); // Set delay to 5 seconds
    //
    //         return () => clearTimeout(timeoutId); // Clear timeout on unmount
    //     }
    // }, [isCorrectAnswer]);

    return (
        <View style={styles.container}>
            <Text style={styles.scoreStyle}>Current Score: {score}</Text>
            <QuestionComponent
                style={styles.questionStyle}
                imageUri={correctAnswer.image}
                answerOptions={questions}
                correctAnswer={correctAnswer.name}
                handleAnswerSelection={(option) => handleAnswerSelection(option)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scoreStyle: {
        flex: 0,
        textAlign: 'center',


        // Shadowing
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Border
        borderWidth: 1,
        borderColor: '#ccc',

        // Font
        fontSize: 24,
        fontWeight: 'bold'


    },
    questionStyle: {
        flex: 4
    },


})

export default QuizScreen