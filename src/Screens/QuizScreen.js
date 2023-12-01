import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import {getTriviaQuestion} from "../API/RANDMApi";
import QuestionComponent from '../Components/QuestionComponent';

const QuizScreen = () => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [round, setRound] = useState(1);
    const [score, setScore] = useState(0);

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
        } else {
            setScore(score - 1)
        }

        if (round < 10 ) {
            setRound(round + 1)
            fetchQuestions();
        } else {
            // Quiz is complete
            alert(`You scored ${score} out of 10!`);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <View>
            <QuestionComponent
                imageUri={correctAnswer.image}
                answerOptions={questions}
                correctAnswer={correctAnswer.name}
                handleAnswerSelection={handleAnswerSelection}
            />
            <Text>Current Score: {score}</Text>
        </View>
    );
};