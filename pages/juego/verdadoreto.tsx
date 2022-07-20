import React from 'react';
import {FcIdea} from 'react-icons/fc';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { CreateButton, GameScreenContainer, TextGame } from '../../styled/Games.module';

const VerdadORetoPage = () => {

  return (
    <Layout>
      <HeaderGameScreen title='Verdad o Reto'/>
      <GameScreenContainer>
        <CreateButton><FcIdea size="4rem"/></CreateButton>
        <TextGame>consectetur adipisicing elit. Quibusdam nemo velit nobis.</TextGame>
      </GameScreenContainer>
    </Layout>
  )
}

export default VerdadORetoPage;
