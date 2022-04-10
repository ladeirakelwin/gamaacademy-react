import { createStore } from 'redux';
import AllUsers from './user/reducer';

const store = createStore(AllUsers);

export default store;
