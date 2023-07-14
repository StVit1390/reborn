//Core
import React, { FC, useEffect, useState } from 'react';

//Styles
import * as S from './styles';
import { CustomCheckbox } from '../CustomCheckbox';

type FilterFormProps = {
    formVal: {
        minTemp: string,
        maxTemp: string,
        cloudy:  boolean,
        sunny:   boolean,
    }
    setFormVal: (formVal: {
        minTemp: string,
        maxTemp: string,
        cloudy: boolean,
        sunny: boolean,
    }) => void
    handlefilterCards: () => void
}

export const FilterForm: FC<FilterFormProps> = ({ formVal, setFormVal, handlefilterCards }) => {
    const reg = /^[0-9]+$/;

    const [ visible, setVisible ] = useState(false);

    useEffect(() => { setVisible(false); }, [ formVal.minTemp.length !== 0 && formVal.maxTemp.length !== 0 ]);

    return (
        <S.FilterFormContainer>
            <CustomCheckbox
                formVal = { formVal }
                label = 'cloudy'
                setFormVal = { setFormVal }
            />
            <CustomCheckbox
                formVal = { formVal }
                label = 'sunny'
                setFormVal = { setFormVal }
            />
            <S.InputMinTempLabel>
                min temp
                <S.InputMinTemp
                    maxLength = { 2 }
                    value = { formVal.minTemp }
                    onChange = { (event) =>{
                        if (reg.test(event.target.value) || event.target.value === '') {
                            setFormVal({ ...formVal, minTemp: event.target.value });
                        }
                    } }>
                </S.InputMinTemp>
                {visible
                && formVal.minTemp.length === 0
                && <S.ValidationError>this field should be filled</S.ValidationError>}
            </S.InputMinTempLabel>
            <S.InputMaxTempLabel>
                max temp
                <S.InputMaxTemp
                    maxLength = { 2 }
                    value = { formVal.maxTemp }
                    onChange = { (event) => {
                        if (reg.test(event.target.value) || event.target.value === '') {
                            setFormVal({ ...formVal, maxTemp: event.target.value });
                        }
                    } }>
                </S.InputMaxTemp>
                {visible
                    && formVal.maxTemp.length === 0
                    && <S.ValidationError>this field should be filled</S.ValidationError>}
            </S.InputMaxTempLabel>
            <S.FilterBtn
                disabled = { visible }
                onClick = { () => {
                    if (formVal.maxTemp === '' || formVal.minTemp === '') { setVisible(true); } else { setVisible(false); handlefilterCards(); }
                } }>filter
            </S.FilterBtn>
        </S.FilterFormContainer>
    );
};
