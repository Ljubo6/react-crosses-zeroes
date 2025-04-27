import { store } from '../../store';
import { FieldLayout } from './field-layout';

export const Field = ({ handleCellClick }) => {
	const { field } = store.getState();
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
