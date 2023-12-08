import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

import { Card, CardCollection } from './app.state';

const initialState: CardCollection = {
  cards: [
    {
      id: '1',
      name: 'cem',
      src: 'assets/cem.jpg',
      sound: 'assets/cem.mp3',
      active: true,
    },
    {
      id: '2',
      name: 'ata',
      src: 'assets/ata.jpg',
      sound: 'assets/ata.mp3',
      active: true,
    },
    {
      id: '3',
      name: 'deniz',
      src: 'assets/deniz.png',
      sound: 'assets/deniz.mp3',
      active: true,
    },
    {
      id: '4',
      name: 'feyyaz',
      src: 'assets/feyyaz.jpg',
      sound: 'assets/feyyaz.mp3',
      active: true,
    },
  ],
  counter: 0,
  generatedCardOrder: ['1'],
  gameOver: false,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.click, (state, { card }) => ({
    ...state,
    counter: matchCheck(card.id, state) ? state.counter + 1 : state.counter,
    generatedCardOrder: matchCheck(card.id, state)
      ? [...state.generatedCardOrder, generateOrder()]
      : ['1'],
    gameOver: matchCheck(card.id, state) ? false : true,
  })),
  on(CounterActions.reset, (state) => ({
    ...state,
    generatedCardOrder: [generateOrder()],
    counter: 0,
  }))
);

function matchCheck(cardId: string, state: CardCollection) {
  return cardId ===
    state.generatedCardOrder[state.generatedCardOrder.length - 1]
    ? true
    : false;
}

function generateOrder() {
  return String(Math.floor(Math.random() * 4) + 1);
}
