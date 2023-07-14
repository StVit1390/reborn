// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

//State
export type Card = {
    id: string,
    rain_probability: number,
    humidity: number,
    day: number,
    temperature: number,
    type: string
}

export type Cards = Card[]

export type WidgetState = {
    loading: boolean,
    cards: Cards | null,
    currentId: string | null,
    currentWeather: Card | null
}

// Contracts
export type BaseContact<T> = CaseReducer<WidgetState, PayloadAction<T>>

export type SetCardsContract = BaseContact<Card[]>
