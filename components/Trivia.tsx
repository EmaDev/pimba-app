import React, { useEffect, useState } from 'react';
import { OptionProps } from '../hooks/usePreguntas';
import { useTimer } from '../hooks/useTimer';
import { Button, ButtonAnswer, TextGame, TimerContainer } from '../styled/Games.module';

interface Props {
    questions: OptionProps[];
    reselectQuest: () => void;
}
export const Trivia = ({ questions, reselectQuest}: Props) => {

    const [actualQuestion, setActualQuestion] = useState(0);
    const [isFinshed, setIsFinished] = useState(true);
    const { timer, isTimerActive, setStartTimer, restartTimer } = useTimer(10);

    useEffect(() => {
        setIsFinished(false);
        setStartTimer(true);
    }, []);

    const handlePlayAgain = () => {
        reselectQuest();
        setIsFinished(false);
        setActualQuestion(0);
        restartTimer();
    }

    const handleAnswerSubmit = ({ target }: any, isCorrect: boolean) => {
        setStartTimer(false);
        target.style.backgroundColor = (isCorrect) ? '#49f148' : '#f04c4c';
        setTimeout(() => {
            target.style.backgroundColor = 'gray';
            if (actualQuestion === questions.length - 1) {
                setIsFinished(true);
            } else {
                setActualQuestion(actualQuestion + 1);
                setStartTimer(true);
                restartTimer();
            }
        }, 1500);
    }

    const handleNextQuestion = () => {
        if (actualQuestion === questions.length - 1) {
            setIsFinished(true);
        } else {
            setActualQuestion(actualQuestion + 1);
            restartTimer();
        }
    };

    return (
        <>
            {
                (!isFinshed) ?
                    <>
                        <p>{`Pregunta ${actualQuestion + 1} de ${questions.length}`}</p>
                        {(isTimerActive) ?
                            <TimerContainer><p>{timer}</p></TimerContainer>
                            :
                            <Button onClick={handleNextQuestion}>Siguiente</Button>
                        }
                        <TextGame>{questions[actualQuestion].pregunta}</TextGame>
                        <div>
                            {
                                questions[actualQuestion].respuestas.map((resp, i) => (
                                    <ButtonAnswer key={i}
                                        disabled={!isTimerActive}
                                        onClick={(e) => handleAnswerSubmit(e, resp.esCorrecta)}>
                                        {resp.opcion}
                                    </ButtonAnswer>
                                ))
                            }
                        </div>
                    </>
                    :
                    <>
                        <Button onClick={handlePlayAgain}>Volver a jugar</Button>
                        <Button onClick={() => (window.location.href = "/juego/trivia")}>Eligir otra tematica</Button>
                    </>
            }
        </>
    )
}
