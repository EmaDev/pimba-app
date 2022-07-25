import styled from "styled-components";


export const Header = styled.header`
   padding: 1rem;
   position: relative;
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





