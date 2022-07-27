import React, { useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { ModalGames } from '../../components/ModalGames';
import { usePreguntas } from '../../hooks/usePreguntas';
import { useTimer } from '../../hooks/useTimer';
import { Button, ButtonAnswer, CreateButton, GameScreenContainer, TextGame, TimerContainer } from '../../styled/Games.module';

const TriviaPage = () => {
    const { selectRandomQuest, questionsSelected } = usePreguntas();
    const [actualQuestion, setActualQuestion] = useState(0);
    const { timer, isTimerActive, setStartTimer, restartTimer } = useTimer(10);
    const [isFinshed, setIsFinished] = useState(false);
    const [isModalActive, setIsModalActive] = useState<boolean>(true);
    const [isStarting, setIsStatating] = useState(true);

    const closeModal = () => {
        setIsModalActive(false);
    }
    const openModal = () => {
        setIsModalActive(true);
    }

    const handlePlayAgain = () => {
        selectRandomQuest();
        setIsFinished(false);
        setActualQuestion(0);
        restartTimer();
    }

    const handleAnswerSubmit = ({ target }: any, isCorrect: boolean) => {
        target.style.backgroundColor = (isCorrect) ? '#49f148' : '#f04c4c';
        setTimeout(() => {
            target.style.backgroundColor = 'gray';
            if (actualQuestion === questionsSelected.length - 1) {
                setIsFinished(true);
            } else {
                setActualQuestion(actualQuestion + 1);
                restartTimer();
            }
        }, 1500);
    }

    const handleNextQuestion = () => {
        if (actualQuestion === questionsSelected.length - 1) {
            setIsFinished(true);
        } else {
            setActualQuestion(actualQuestion + 1);
            restartTimer();
        }
    };

    return (
        <Layout>
            {isModalActive &&
                <ModalGames allowCreate closeModal={closeModal}
                    onStart={() => { selectRandomQuest(); setStartTimer(true); setIsStatating(false)}}
                    isStarting={isStarting}
                    instructions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure harum eveniet facere enim minus, quia est ullam odio saepe laborum."
                    creatorInstructins='Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure quia est ullam odio saepe laborum.'
                />
            }
            <HeaderGameScreen title='Trivia' openModal={openModal} />
            <GameScreenContainer>
                <CreateButton><FcIdea size="4rem" /></CreateButton>
                {(questionsSelected.length > 0 && !isFinshed) ?
                    <>
                        <p>{`Pregunta ${actualQuestion + 1} de ${questionsSelected.length}`}</p>
                        {(isTimerActive) ?
                            <TimerContainer><p>{timer}</p></TimerContainer>
                            :
                            <Button onClick={handleNextQuestion}>Siguiente</Button>
                        }
                        <TextGame>{questionsSelected[actualQuestion].pregunta}</TextGame>
                        <div>
                            {
                                questionsSelected[actualQuestion].respuestas.map((resp, i) => (
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
            </GameScreenContainer>
        </Layout>
    )
}

export default TriviaPage;

