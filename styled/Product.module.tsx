import styled from "styled-components";

export const ContainerSpinner = styled.div`
   width: 100%;
   height: 100vh;
   display:flex;
   margin:auto;
   padding: 3rem;
   justify-content:center;
   align-items:center;
`;
export const Container = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

export const Header = styled.header`
   padding: 1rem 0;
   width: 100%;
   background-color: #d1d1d1;
   border-radius: 0 0 0 280px;
`;

interface ContainerProductProps{
  combo?:boolean; 
}
export const ProductContainer = styled.div<ContainerProductProps>` 
   ${({combo}) => combo ? 
   `
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content:center;
   width: 90%;
   margin:auto;
   ` 
   : 
   `display: grid;
   grid-template-columns: 40% 60%;
   align-items:center;
   `
  }
`;

export const ImageContainer = styled.div`
   margin:auto;
   height: 250px;
   img{
    height: 100%;
   }
`;

export const InfoContainer = styled.div`
  margin:auto;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 100%;
  h4{
    margin:0;
    font-size: 1.8rem;
    font-weight: 500;
    color: grey;
  } 
`;
export const ProductName = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #242424;
  margin: 1rem 0;
`; 

export const Qualification = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const Price = styled.p`
   font-size: 2.8rem;
   font-weight: 700;
   padding: 1rem;
   margin: 0;
   background-color: orange;
   color: #fff;
   width: fit-content;
   border-radius: 8px;
`;

export const Description = styled.div`
   width: 90%;
   margin:auto; 
   h3{
    font-size: 2.3rem;
    color: #161718;
    font-weight: 700;
    margin: 1rem 0;
   }
   p{
    margin: 0;
    font-size: 2rem;
    color: #161718;
   }
`;

export const ButtonBack = styled.div`
   font-size: 4.5rem;
   margin: 0 1rem;
   color: gray;
`;





