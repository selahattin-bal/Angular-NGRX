import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardCollection } from './app.state';
export const selectState = createFeatureSelector<CardCollection>('counter');

export const selectCounter = createSelector(
    selectState,
  (state: CardCollection) => state.counter
);

export const selectCards= createSelector(
    selectState,
  (state: CardCollection) => state.cards
);

export const selectGame= createSelector(
    selectState,
  (state: CardCollection) => state.gameOver
);
