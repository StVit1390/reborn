// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import * as types from '../../../bus/widget/types';

export const Card:FC<{props: types.Card, selected: boolean, onClick: ()=>void}> = ({ props, selected, onClick }) => {
    const { day, temperature, type } = props;

    const week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

    return (
        <S.CardContainer
            selected = { selected }
            onClick = { onClick }>
            <S.CardHeader>{week[ new Date(day).getDay() ]}</S.CardHeader>
            <S.CardBody weather = { type }></S.CardBody>
            <S.CardFooter>{temperature}°</S.CardFooter>
        </S.CardContainer>
    );
};
