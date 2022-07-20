import React from 'react';
import { HeaderGameScreen } from '../../components/HeaderGameScreen';
import { Layout } from '../../components/Layout';
import { useAnotador } from '../../hooks/useAnotador';
import { AnotadorScreen, Button, GameScreenContainer, SepardorAnotador } from '../../styled/Games.module';


const AnotadorTrucoPage = () => {

  const {Anotador:TeamOne,resetPoints:resetTeamOne,quantity:quantOne} = useAnotador();
  const {Anotador:TeamTwo,resetPoints:resetTeamTwo,quantity:quantTwo} = useAnotador();
  
  const handleRestart = () => {
    resetTeamOne();
    resetTeamTwo();
  }
  return (
    <Layout>
      <HeaderGameScreen title='Anotador'/>
      <GameScreenContainer>
      {(quantOne !== 0 && quantTwo !== 0 ) && <Button color='grey' onClick={handleRestart}>Reiniciar Cuenta</Button>}
        
        <AnotadorScreen>
          <div>
            <h2>Nosotros</h2>
          <TeamOne />
          </div>
          <SepardorAnotador/>
          <div>
            <h2>Ellos</h2>
            <TeamTwo/>
          </div>
        </AnotadorScreen>
        
        
      </GameScreenContainer>
    </Layout>
  )
}

export default AnotadorTrucoPage;
