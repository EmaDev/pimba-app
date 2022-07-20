import styled from "styled-components";

export const Container = styled.main`
   width: 100%;
   min-height: 100vh; 
   background-color: pink;
   background-image: url(/background.png);
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
`;

export const DivHeader = styled.div`
   max-width: 678px; 
   margin:auto;
   padding: 3.5rem 1rem;
   display: grid;
   align-items:center;
   grid-template-columns: 80% 20%;
   gap: 1rem;

   @media(min-width: 768px){
    padding: 8rem 1rem;
   }
`;
export const TextHeader = styled.div`
   color: #fff;
   font-weight: 400;
   h1{
    font-size: 2.2rem;
    font-weight: 500;
    margin: 0;
    span{
        margin-left: .5rem;
        font-weight: 700;
    }
   }
   h2{
    margin: 0;
    font-size: 1.8rem;
   }
`;

export const UserIcon = styled.div`
   width: 50px;
   height: 50px;
   margin:auto;
   border-radius: 100%;
   background-color: grey;
   cursor: pointer;
`; 

export const GamesSection = styled.section`
   min-height: 90vh;
   width: 100%;
   padding: 1rem; 
   background-color: #e7e7e7;
   border-radius: 30px 30px 0 0;
`;

export const GamesContainer = styled.div`
   max-width: 500px;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const ToolsContainer = styled.div`
   width: 100%;
   max-width: 600px;
   margin: 2rem auto;
   display: flex;
   overflow-x:auto;
`;
export const ToolCard = styled.div`
   min-width: 100px;
   height: 100px;
   background-color: ${({color}) => color ? '#6eb67a' : 'transparent'};
   margin: 5px;
   border-radius: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   img{
      width: 100%;
   }
`;

export const JuegoButton = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: #ef6467;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 2px 2px 5px grey;

  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  background-image: url(/background.png);
  background-size: cover;
  background-repeat: no-repeat;

`;

export const GameScreenContainer = styled.main`
   min-height: 60vh;
   max-width: 768px;
   margin:auto;
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   padding: 2rem 1rem;
   height: 100%;
   position: relative;
`; 

export const TextGame = styled.p`
   margin: 0;
   font-size: 2.6rem;
   font-weight: 700;
   color: #343434;
   text-align:center;
`; 

export const CreateButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    margin:auto;
    border-style:none;
    background: none;
    padding: 1rem;
`;

export const AnotadorScreen = styled.div`
   margin:auto;
   display: flex;

   h2{
      margin:auto;
      font-size: 2.5rem;
      color: grey;
      text-align: center;
      border-bottom: 1px solid grey;
   }
`;
export const SepardorAnotador = styled.div`
   width: 2px;
   background-color: grey;
   height: 100%; 
`;
export const AnotadorContainer = styled.div`
   width: 100px;
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: grey;
   position:relative;
   
   h3{
      font-size: 4rem;
      margin: 1rem 0;
      text-align:center;
   }
`;
export const AnotadorButtons = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 4rem;
      /*position: absolute;
      bottom: 0;*/
`;
export const AnotadorImage = styled.div`
   margin: 1rem 0;
   width: 70px;
   heigth: 70px;
`;

export const Button = styled.button` 
width: 90%;
max-width: 400px;
padding: 1rem;
background-color: ${({color}) => color ? color : '#26282d'};
font-size: 2rem;
color: #fff;
border-style: none;
margin: 1rem auto 2rem auto;
border-radius: 8px;

&:hover{
 background-color: #1a1b1e;
 color: grey;
 transition: .3s;
}
`;

 