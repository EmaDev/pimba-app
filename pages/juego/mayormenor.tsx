import React, { useEffect, useState } from 'react';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { ModalGames } from '../../components/ModalGames';
import { Spinner } from '../../components/Spinner';
import { SwiperContainer } from '../../components/Swiper';
import { Button, GameScreenContainer } from '../../styled/Games.module';

const MayorMenorPage = () => {
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [isMezclado, setMezlaclar] = useState<boolean>(true);

    const mezclarCartas = () => {
        setMezlaclar(false);
        setTimeout( () => {
            setMezlaclar(true);
        },1000);
    }

    const closeModal = () => {
        setIsModalActive(false);
    }
    const openModal = () => {
        setIsModalActive(true);
    }
    return (
        <Layout>
            {isModalActive &&
                <ModalGames closeModal={closeModal}
                    instructions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure harum eveniet facere enim minus, quia est ullam odio saepe laborum."
                    creatorInstructins='Architecto totam fugiat non dolore corporis delectus dolor aspernatur officia iure quia est ullam odio saepe laborum.'
                />
            }
            <HeaderGameScreen title='Mayor o Menor' openModal={openModal} />
            <GameScreenContainer>
                {
                    (isMezclado) ? 
                    <SwiperContainer/>
                    :
                    <Spinner/>
                }
                <br/>
                <Button onClick={mezclarCartas}>Mezclar</Button>
            </GameScreenContainer>
        </Layout>
    )
}

export default MayorMenorPage;
