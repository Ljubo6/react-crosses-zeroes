import { createEmptyField } from './utils';
import { STATUS, PLAYER } from './constants';

const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_FIELD':
			return { ...state, field: payload };

		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };

		case 'SET_STATUS':
			return { ...state, status: payload };

		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};
