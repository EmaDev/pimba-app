import styled from "styled-components";

export const Title = styled.h1`
   font-size: 3.5rem;
   color: #232426;
`;
export const Container = styled.div`
   min-height: 80vh;
   padding: 2rem 1rem;
   align-items:center; 
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
   background-color: #d82323;
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
   }
`;