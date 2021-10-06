import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todosReducer } from './reducers/todos';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(persistedReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
