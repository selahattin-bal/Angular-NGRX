import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/store/app.state';

export const click = createAction('[Game Page] Click', props<{card: Card}>());
export const reset = createAction('[Game Page] Reset');
