import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../components/Layout';
import { Container, DivHeader, GamesContainer, GamesSection, JuegoButton, TextHeader, ToolCard, ToolsContainer, UserIcon } from '../styled/Games.module';

const anotadorImg = require('../assets/buttons/truco.png');
const jackImg = require('../assets/buttons/jack.png');
const ruletaImg = require('../assets/buttons/ruleta.png');

const JuegosPage = () => {

  return (
    <Layout>
      <Container>
        <DivHeader>
          <TextHeader>
            <h1>Hola,<span>Priscila</span></h1>
            <h2>Que queres jugar?</h2>
          </TextHeader>
          <UserIcon>
            <Image src={require('../assets/user-icon.png')} alt="icono de usuario" />
          </UserIcon>
        </DivHeader>

        <GamesSection>

          <ToolsContainer>
            <ToolCard>
              <img src={ruletaImg.default.src} />
            </ToolCard>
            <Link href={'/juego/truco'}>
              <ToolCard color='ev'>
                <img src={anotadorImg.default.src} />
              </ToolCard>
            </Link>
            <ToolCard>
              <img src={jackImg.default.src} />
            </ToolCard>
            <ToolCard color='ever'/>
          </ToolsContainer>

          <GamesContainer>
            <Link href={'/juego/mayormenor'}>
              <JuegoButton>Mayor o menor</JuegoButton>
            </Link>
            <Link href={'/juego/trivia'}>
              <JuegoButton>Trivia</JuegoButton>
            </Link>
            <Link href={'/juego/verdadoreto'}>
              <JuegoButton>Verdad o Reto</JuegoButton>
            </Link>
          </GamesContainer>
        </GamesSection>
      </Container>
    </Layout>
  )
}

export default JuegosPage;