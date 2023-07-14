// Core
import styled from 'styled-components';

//Assets
import bg from '/src/assets/images/bg.png';

export const WidgetContainer = styled.section`
    width: 100%;
    height: 100%;
    background-image: url(${bg});
`;

export const WidgetMain = styled.div`
    display: flex;
    height: 70%;
    justify-content: end;
`;

export const WidgetCardsList = styled.div`
    display: flex;
    justify-content: center;
    height: 30%;
`;

export const NoCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    `;
