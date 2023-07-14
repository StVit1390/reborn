// Core
import styled from 'styled-components';

//Color
import * as colors  from '../../../assets/colors';

//Icons
import sunny from '../../../assets/icons/weather-icon-sunny.png';
import rainy from '../../../assets/icons/weather-icon-rainy.png';
import cloudy from '../../../assets/icons/weather-icon-cloudy.png';
import probability from '../../../assets/icons/probability.png';
import humidity from '../../../assets/icons/humidity.png';

export const CurrentWeatherContainer = styled.section`
    display: flex;
    align-items: center;
    height: 100%;
    width: 33%;
    flex-direction: column;
    padding: 100px 30px 50px 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: ${colors.white.base};
`;

export const CurrentWeatherHead = styled.section`
    display: flex;
    width: 100%;
    height: 20% ;
    align-items: center;
`;

export const CurrentWeatherHeadIcon = styled.section<{weather: string | undefined}>`
    display: flex;
    background-image: url(${({ weather }) => {
        if (weather === 'sunny') { return sunny; }
        if (weather === 'rainy') { return rainy; }
        if (weather === 'cloudy') { return cloudy; }

        return '';
    }});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 50%;
    height: 100%;
`;

export const CurrentWeatherHeadDate = styled.section`
    display: flex;
    width: 50%;
    flex-direction: column;
`;

export const Top = styled.div`
font-size: 1.5rem;
margin-bottom: 10px;
font-weight: 400;
`;

export const Bottom = styled.div`
font-size: 1rem;`;

export const CurrentWeatherBody = styled.section`
    display: flex;
    font-size: 20rem;
    height: 65%;
    font-weight: 100;
`;

export const CurrentWeatherFooter = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 15% ;
`;

export const CurrentWeatherFooterProbability = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    width: 20% ;
    justify-content: center;
        &:after {   
            content: '';
            position: absolute;
            left: 0px;
            width: 2rem;
            height: 2rem;
            background-repeat: no-repeat;
            background-image: url(${probability});
        }
`;

export const CurrentWeatherFooterHumidity = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    width: 20% ;
    justify-content: center;
        &:after {
            content: "";
            position: absolute;
            left: 10px;
            width: 2rem;
            height: 2rem;
            background-repeat: no-repeat;
            background-image: url(${humidity});
        }
`;
