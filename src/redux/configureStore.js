import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import showsReducer from './showsReducer';
import showInfoReducer from './showInfoReducer';

const rootReducer = combineReducers({
  shows: showsReducer,
  showInfos: showInfoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
