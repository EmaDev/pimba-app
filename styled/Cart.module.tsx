import styled from "styled-components";

export const Title = styled.h1`
   padding: 1rem;
   font-size: 3.5rem;
   color: #232426;
`;
export const Container = styled.div`
   min-height: 80vh;
   padding: 2rem 1rem;
   align-items:center; 
   
   @media(min-width: 768px){
      width: 90%;
      margin: auto;
      display: grid;
      grid-template-columns: 60% 40%;
      column-gap: 1rem;
   }
`;  

export const Section = styled.div<any>`
   background-color: #DADADA;
   padding: 8px;
   border-radius: 8px;
   margin: 1rem 0;

   @media(min-width: 768px){
      padding: 2rem;
      border-radius: 10px;
      margin: 0;
   }
`;
export const ItemCard = styled.div`
   border-bottom: 1px solid gray;
   padding: 1rem 0;
   display: grid; 
   grid-template-columns: 20% 80%;
   position:relative;
`;

export const ItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  p{
    margin: 0;
    font-size: 1.6rem;
    color: #232426;
  }
  span{
    font-size: 2rem;
    font-weight: 500;
    color: #232426;
  }
`;

export const ItemQuantity = styled.div`
   display: flex;
   justify-content: space-between;
   align-items:center;

   h4{
     font-size: 1.6rem;
     color: #232426;
     margin:0;
   }
   span{
    font-weight: 500;
    font-size: 1.8rem;
    margin-left: 5px; 
   }
`;

export const ImageContainer = styled.div`
   width: 60px;
   height: 70px;
   margin:auto;
   display:flex;
   justify-content:center;
   align-items:center;

   img{
      height: 100%;
   }
`;

export const ButtonRemove = styled.button`
   position: absolute;
   top: 5px;
   left: -5px;
   width: 20px;
   height: 20px;
   display: flex;
   align-items:center;
   color: #fff;
   background-color: #ca5d5d;
   border-style:none;
   border-radius: 100%;
   
   p{
    margin: 0;
    padding:0;
    font-size: 2rem;
   }
   &:hover{
    color: red;
    background-color: red;
    transition: .3s;
   }
`;

export const SumaryDiv = styled.div<any>`
   width: 100%;
   padding-bottom: 1rem;
   margin: 1rem 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${({total}) => !total && `border-bottom: 1px solid gray;`}
   p{
      margin: 0;
      font-size: 2rem;
   }
   h3{
      font-size: 2.2rem;
      font-weight: 500;
      margin:0;
   }
`;

export const ButtonConfirmCart = styled.button`
   width: 100%;
   padding: 1.5rem;
   background-color: gray;
   color: #fff;
   margin: 1rem auto;
   border-style:none;
   font-size: 2rem;
   border-radius: 8px;

   &:hover{
      background-color: #4B4B4B;
      transition: .3s;
   }
`;