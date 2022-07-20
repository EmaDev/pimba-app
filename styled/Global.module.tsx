import styled from "styled-components";

interface SectionProps {maxW: number; }

export const Section = styled.section<SectionProps>`
  max-width: ${({maxW}) => `${maxW}px`};
  margin:auto;
`;

interface ProductsContainerProps {
  normal?: boolean;
} 
export const ProductsContainer = styled.div<ProductsContainerProps>`
   ${({normal}) => normal &&
    `padding: 3rem 1rem;
     display: flex;
     align-items:center;
     overflow-x:auto;`
  }
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: bold;
  color: #242424; 
  padding: 0 1rem;
  margin: 0;
`;

export const PriceContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-between;
   padding: 1rem;
   font-size: 2rem;
   font-weight: bold;
   color: #242424;
   p{
    margin: 0 .5rem;
   }
`;

export const Searcher = styled.div`
   width: 90%;
   margin: 1rem auto; 
   display:flex;
   align-items:center;
   padding: 1rem;
   border-radius: 6px;
   box-shadow: 2px 2px 4px #adadad;
   color: #242424;
   font-size: 2.5rem;
   input{
    border:none;
    margin:0;
    margin-left: 1rem; 
    width:100%;
    background: none;
    font-size: 1.8rem;
    color: #242424;
   }
`;