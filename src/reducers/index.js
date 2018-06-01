import { combineReducers } from 'redux';
import MoviveReducer from './reducer_movie';

const rootReducer = combineReducers({
  movie: MoviveReducer
});

export default rootReducer;
