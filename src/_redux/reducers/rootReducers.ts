import {combineReducers} from 'redux';
import permitReducer from './permitsReducer';

const rootReducer = combineReducers({
  permits: permitReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;