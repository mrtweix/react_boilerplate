import { createStore, applyMiddleware } from "redux";
// redux dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";
// redux console logger (remove this during production)
import logger from "redux-logger";
// root reducer (combination) of all reducers
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
