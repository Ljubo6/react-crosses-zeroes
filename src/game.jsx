import { useEffect, useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { handleCellClick, handleRestart } from './handlers';
import { store } from './store.jsx';

export const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	return (
		<GameLayout
			status={state.status}
			currentPlayer={state.currentPlayer}
			field={state.field}
			handleCellClick={(cellIndex) => handleCellClick(store, cellIndex)}
			handleRestart={() => handleRestart(store)}
		/>
	);
};
