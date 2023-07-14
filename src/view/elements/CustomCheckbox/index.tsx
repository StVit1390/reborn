// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';
import { log } from 'console';

interface CustomCheckboxProps {
    label: string;
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
}

export const CustomCheckbox:FC<CustomCheckboxProps> = ({ label, formVal, setFormVal }) => {
    const handleCheckbox = () => {
        if (label === 'cloudy') {
            setFormVal({ ...formVal, cloudy: !formVal.cloudy });
        }
        if (label === 'sunny') {
            setFormVal({ ...formVal, sunny: !formVal.sunny });
        }
    };

    return (
        <S.Wrap>
            <span>{label}</span>
            <S.ContainerCheckedAfter>
                <S.CheckboxInput
                    checked = { label === 'cloudy' ? formVal.cloudy : formVal.sunny }
                    type = 'checkbox'
                    onChange = { () => handleCheckbox() }
                />
                <S.Checkmark />
                <S.CheckmarkAfter>
                    <S.CheckmarkIndicator />
                </S.CheckmarkAfter>
            </S.ContainerCheckedAfter>
        </S.Wrap>

    );
};
