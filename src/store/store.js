// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';

// const loggerMiddleWares = store => next => action => {
//   if (!action) return next(action);

//   console.log('type : ', action.type);
//   console.log('payload : ', action.payload);
//   console.log('currentState : ', store.getState());

//   next(action);
//   console.log('next state : ', store.getState());
// };

// const persistConfig = {
//   key: 'root',
//   storage,
//   // blacklist: [],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// export const persistor = persistStore(store);
