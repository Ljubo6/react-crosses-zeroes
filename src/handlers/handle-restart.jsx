import { STATUS, PLAYER } from '../constants';
import { createEmptyField } from '../utils';

export const handleRestart = (store) => {
	store.dispatch({ type: 'SET_STATUS', payload: STATUS.TURN });
	store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: PLAYER.CROSS });
	store.dispatch({ type: 'SET_FIELD', payload: createEmptyField() });
};
