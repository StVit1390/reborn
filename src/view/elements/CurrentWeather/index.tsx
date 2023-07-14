//Core
import React, { FC, useEffect } from 'react';

//Styles
import * as S from './styles';

// Hooks
import { useWidget } from '../../../bus/widget';


export const CurrentWeather:FC = () => {
    const { widget } = useWidget();
    const week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    return (
        <S.CurrentWeatherContainer>
            <S.CurrentWeatherHead>
                <S.CurrentWeatherHeadIcon weather = { widget.currentWeather?.type }></S.CurrentWeatherHeadIcon>
                <S.CurrentWeatherHeadDate>
                    <S.Top>{widget.currentWeather && week[ new Date(widget.currentWeather?.day).getDay() ]}</S.Top>
                    <S.Bottom>
                        {widget.currentWeather?.day ? new Date(widget.currentWeather.day)?.getDate() : null}
                        {' '}
                        {widget.currentWeather?.day ? month[ new Date(widget.currentWeather.day)?.getMonth() ] : null}
                    </S.Bottom>
                </S.CurrentWeatherHeadDate>
            </S.CurrentWeatherHead>
            <S.CurrentWeatherBody>{widget.currentWeather?.temperature}°</S.CurrentWeatherBody>
            <S.CurrentWeatherFooter>
                <S.CurrentWeatherFooterProbability>
                    {widget.currentWeather?.rain_probability} {'%'}
                </S.CurrentWeatherFooterProbability>
                <S.CurrentWeatherFooterHumidity>
                    {widget.currentWeather?.humidity} {'%'}
                </S.CurrentWeatherFooterHumidity>
            </S.CurrentWeatherFooter>
        </S.CurrentWeatherContainer>
    );
};
