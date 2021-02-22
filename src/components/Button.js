import styled from 'styled-components'

/*Cart Button Styled-Components Setup/ style*/ 
export const CartButton = styled.button`
    text-transform: uppercase;
    background-color: white;
    border-radius: 6px;
    color: var(--mainDark);
    font-size: 1.3rem;
    border: 0.2rem solid var(--mainDark);
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cartBtn ? "var(--mainRed)":"var(--mainDark)"}; //Allows dynamic colour changing
        color: var(--grey);
    }
`;