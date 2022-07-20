import React from 'react';
import styled from 'styled-components';
import { RiHome3Line } from 'react-icons/ri';
import { CgGames, CgProfile } from 'react-icons/cg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Link from 'next/link';
const Container = styled.div`
   width: 100%;
   position: fixed;
   bottom: 0;
   z-index: 999;
`;

const DivButtons = styled.div`
   margin:auto;
   padding: .5rem 1rem;
   display: grid;
   grid-template-columns: 25% 25% 25% 25%;
   justify-content: center;
   align-items: center;
   border-top: 1px solid grey;
   background-color: #fff;
   border-radius: 10px 10px 0 0;
`;

const Button = styled.div<any>`
   margin:auto;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${({active}) => active ? '#2c2c2c' : 'grey'};
   p{
    margin: -3px 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: ${({active}) => active ? '700' : '500'};;
   }
`;
export const NavBar = () => {
    return (
        <Container>
            <DivButtons>
                <Button active>
                    <RiHome3Line size="3rem" />
                    <p>Inicio</p>
                </Button>
                <Link href={'/juegos'}>
                <Button>
                    <CgGames size="3rem" />
                    <p>Juegos</p>
                </Button>
                </Link>
                <Button>
                    <HiOutlineShoppingCart size="3rem" />
                    <p>Carrito</p>
                </Button>
                <Button>
                    <CgProfile size="3rem" />
                    <p>Cuenta</p>
                </Button>
            </DivButtons>
        </Container>
    )
}
