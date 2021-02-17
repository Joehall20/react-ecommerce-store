import styled from 'styled-components'

/*Cart Button Styled-Components Setup/ style*/ 
export const CartButton = styled.button`
    text-transform: capitalize;
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
        background: var(--mainDark);
        background-color:${props => (props.cartbtn? "var(--mainGreen)":"var(--mainDark)")}; //Allows dynamic colour changing
        color: var(--mainWhite);
    }

`;