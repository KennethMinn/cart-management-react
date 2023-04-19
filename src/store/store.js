import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleWares = (store) => (next) => (action) => {
  if (!action) return next(action);

  console.log("type : ", action.type);
  console.log("payload : ", action.payload);
  console.log("currentState : ", store.getState());

  next(action);
  console.log("next state : ", store.getState());
};

const middleWares = [loggerMiddleWares];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
