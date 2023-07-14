// Core
import styled from 'styled-components';

// Colors
import * as colors  from '../../../assets/colors';

export const FilterFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 33%;
    color: ${colors.white.base};
    font-family: 'Roboto', sans-serif;
    padding: 50px 100px;
`;


export const InputMinTemp = styled.input`
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.white.base};
    color: ${colors.white.base};
    font-size: 1.5rem;
    width: 50px;
    text-align: center;
    margin: 0 10px;
    `;

export const InputMinTempLabel = styled.label`
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 10px;
    `;

export const InputMaxTemp = styled.input`
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.white.base};
    color: ${colors.white.base};
    font-size: 1.5rem;
    width: 50px;
    text-align: center;
    margin: 0 10px;
    `;

export const InputMaxTempLabel = styled.label`
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 10px;
    `;

export const FilterBtn = styled.button`
    outline: none;
    border: none;
    background: ${colors.pink.dark};
    color: ${colors.white.base};
    font-size: 1.5rem;
    padding: 10px 20px;
    margin: 20px 0;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
        &:hover {
            background: ${colors.pink.base};
        }
        &:disabled {
            background: ${colors.pink.dark};
            cursor: not-allowed;
        }
    `;

export const ValidationError = styled.div`
    color: ${colors.white.base};
    font-size: 0.5rem;
    margin: 0;
    padding: 5px ;
    background: ${colors.pink.base};
    border-radius: 5px;
    width: fit-content;
    margin: 10px auto 0 auto;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid ${colors.pink.base};

    }
`;
