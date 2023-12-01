import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import {getTriviaQuestion} from "../API/RANDMApi";
import QuestionComponent from '../Components/QuestionComponent';

const QuizScreen = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const fetchQuestions = async () => {
        let fourCharacters = await getTriviaQuestion();



        setQuestions(data);
    };

    // set score but need to change how it lets people know / store their score.
    const handleAnswerSelection = (option) => {
        if (option === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Quiz is complete
            alert(`You scored ${score} out of 10!`);
        }
    };

    // Initialize quiz data
    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <View>
            <QuestionComponent
                question={questions[currentQuestionIndex].question}
                imageUri={questions[currentQuestionIndex].imageUri}
                answerOptions={questions[currentQuestionIndex].answerOptions}
                correctAnswer={questions[currentQuestionIndex].correctAnswer}
                handleAnswerSelection={handleAnswerSelection}
            />
            <Text>Current Score: {score}</Text>
        </View>
    );
};