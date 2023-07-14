// Core
import styled from 'styled-components';

//Color
import * as colors  from '../../../assets/colors';

//Icons
import sunny from '../../../assets/icons/weather-icon-sunny.png';
import rainy from '../../../assets/icons/weather-icon-rainy.png';
import cloudy from '../../../assets/icons/weather-icon-cloudy.png';

export const CardContainer = styled.section<{selected: boolean}>`
    width: 150px;
    max-height: 250px;
    background-color:${(props) => props.selected ? colors.pink.base : colors.pink.dark } ;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    transition: all 0.3s ease-in-out;
        &:hover {
            background: ${colors.pink.base};
        }
`;

export const CardHeader = styled.header`
    width: 100%;
    height: 80px;
    color: ${colors.white.base};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`;

export const CardBody = styled.section<{weather: string}>`
    width: 100%;
    height: 90px;
    background-image: url(${({ weather }) => {
        if (weather === 'sunny') { return sunny; }
        if (weather === 'rainy') { return rainy; }
        if (weather === 'cloudy') { return cloudy; }

        return '';
    }});
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CardFooter = styled.footer`
    width: 100%;
    height: 80px;
    color: ${colors.white.base};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
`;
