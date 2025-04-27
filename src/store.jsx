import { createStore } from 'redux';
import { reducer } from './redicer.jsx';

export const store = createStore(reducer);
