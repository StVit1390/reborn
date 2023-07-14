//Core
import React, { FC, useEffect, useState } from 'react';

//Styles
import * as S from './styles';

//View
import { Card } from '../../elements/Card';
import { CurrentWeather } from '../../elements/CurrentWeather';
import { FilterForm } from '../../elements/FilterForm';

// Redux
import { WidgetActions } from '../../../bus/widget/slice';
import { useDispatch } from '../../../tools/hooks/useDispatch';

// Hooks
import { useWidget } from '../../../bus/widget';

// Types
import * as types from '../../../bus/widget/types';
import { Loader } from '../../elements/Loader';

export const Widget:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(WidgetActions.getCards());
    }, []);

    const { widget } = useWidget();

    const set = (id:string, el: types.Card) => {
        dispatch(WidgetActions.setId(id));
        dispatch(WidgetActions.setCurrentWeather(el));
    };

    type FormValState = {
        minTemp: string,
        maxTemp: string,
        cloudy:  boolean,
        sunny:   boolean,
    }

    const [ formVal, setFormVal ] = useState<FormValState>({
        minTemp: '',
        maxTemp: '',
        cloudy:  false,
        sunny:   false,
    });

    const [ filtredCards, setFiltredCards ] = useState<types.Card[] | null>(null);

    const handlefilterCards = () => {
        const { minTemp, maxTemp, cloudy, sunny } = formVal;

        const firstLvlSort = widget.cards && widget.cards.filter((el) => {
            if (minTemp && maxTemp) {
                return el.temperature >= Number(minTemp) && el.temperature <= Number(maxTemp);
            }
            if (minTemp) {
                return el.temperature >= Number(minTemp);
            }
            if (maxTemp) {
                return el.temperature <= Number(maxTemp);
            }

            return el;
        });
        const SecondLvlSort = firstLvlSort?.filter((el)=> {
            if (cloudy && sunny) {
                return el.type === 'cloudy' || el.type === 'sunny';
            }
            if (cloudy) {
                return el.type === 'cloudy';
            }
            if (sunny) {
                return el.type === 'sunny';
            }

            return el;
        });

        setFiltredCards(SecondLvlSort ?? null);
    };

    const currentArray = filtredCards ? filtredCards : widget.cards;

    return (
        <S.WidgetContainer>

            {widget.loading
                ? <Loader />
                :                <>
                    <S.WidgetMain>
                        {currentArray?.length !== 0 && <CurrentWeather />}
                        <FilterForm
                            formVal = { formVal }
                            handlefilterCards = { handlefilterCards }
                            setFormVal = { setFormVal }
                        />
                    </S.WidgetMain>
                    <S.WidgetCardsList>
                        {currentArray?.length === 0 && <S.NoCards>no cards</S.NoCards>}
                        {widget.cards && currentArray?.slice(0, 7).map((el: any) => {
                            return (
                                <Card
                                    key = { el.id }
                                    props = { el }
                                    selected = { el.id === widget.currentId }
                                    onClick = { () => set(el.id, el) }
                                />
                            );
                        })}
                    </S.WidgetCardsList>s
                </>}
        </S.WidgetContainer>
    );
};
