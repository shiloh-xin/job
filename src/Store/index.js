import { createStore } from 'redux';

import reducer from './reducers/reducer_todolist';

const store = createStore(reducer);

export default store;
