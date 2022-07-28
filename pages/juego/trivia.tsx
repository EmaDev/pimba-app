import React, { useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { ModalGames } from '../../components/ModalGames';
import { Spinner } from '../../components/Spinner';
import { Trivia } from '../../components/Trivia';
import { usePreguntas } from '../../hooks/usePreguntas';
import { Button, CreateButton, GameScreenContainer } from '../../styled/Games.module';
import { Title } from '../../styled/Global.module';

interface CatgoriaProps {
    key: string;
    name: string;
}
const categorias: CatgoriaProps[] = [
    { key: 'ochonueve', name: 'Geografia' },
    { key: 'ochonueve', name: 'Historia' },
    { key: 'ochonueve', name: 'Programacion' },
    { key: 'ochonueve', name: 'Ciencia' },
]
const TriviaPage = () => {

    const { getQuestionFromDB, selectRandomQuest, questionsSelected, isReady } = usePreguntas();
    //modal
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [isStarting, setIsStatating] = useState(true);

    const closeModal = () => {
        setIsModalActive(false);
    }
    const openModal = () => {
        setIsModalActive(true);
    }

    return (
        <Layout>

            {isModalActive &&
                <ModalGames allowCreate closeModal={closeModal}
                    onStart={() => { selectRandomQuest(); setIsStatating(false) }}
                    isStarting={isStarting}
                    instructions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure harum eveniet facere enim minus, quia est ullam odio saepe laborum."
                    creatorInstructins='Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure quia est ullam odio saepe laborum.'
                />
            }
            <HeaderGameScreen title='Trivia' openModal={openModal} />
            <GameScreenContainer>
                {(questionsSelected.length > 0 && isReady) &&
                    <Trivia
                        questions={questionsSelected}
                        reselectQuest={() => selectRandomQuest}
                    />
                }
                {
                    (questionsSelected.length === 0) &&
                    <>
                        <CreateButton><FcIdea size="4rem" /></CreateButton>
                        <Title>Selecciona una tematica</Title>
                        <br />
                        {
                            categorias.map(({ key, name }) => (
                                <Button key={key} bold
                                    onClick={() => getQuestionFromDB(key)}
                                >{name}
                                </Button>
                            ))
                        }
                    </>
                }
            </GameScreenContainer>
        </Layout>
    )
}

export default TriviaPage;

