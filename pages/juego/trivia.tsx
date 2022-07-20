import React, { useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { ModalGames } from '../../components/ModalGames';
import { Button, CreateButton, GameScreenContainer, TextGame } from '../../styled/Games.module';

const TriviaPage = () => {
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
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
             instructions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure harum eveniet facere enim minus, quia est ullam odio saepe laborum."
             creatorInstructins='Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure quia est ullam odio saepe laborum.'
            />
            }
            <HeaderGameScreen title='Trivia' openModal={openModal}/>
            <GameScreenContainer>
                <CreateButton><FcIdea size="4rem" /></CreateButton>
                <TextGame>consectetur adipisicing elit. Quibusdam nemo velit nobis.</TextGame>
                <Button>Siguiente</Button>
            </GameScreenContainer>
        </Layout>
    )
}

export default TriviaPage;

