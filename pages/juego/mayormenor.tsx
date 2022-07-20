import React, { useState } from 'react';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { ModalGames } from '../../components/ModalGames';
import { SwiperContainer } from '../../components/Swiper';
import { Button, GameScreenContainer } from '../../styled/Games.module';

const MayorMenorPage = () => {
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
            <HeaderGameScreen title='Mayor o Menor' openModal={openModal} />
            <GameScreenContainer>
                <SwiperContainer/>
                <br/>
                <Button>Mezclar</Button>
            </GameScreenContainer>
        </Layout>
    )
}

export default MayorMenorPage;
