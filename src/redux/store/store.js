import { createStore, applyMiddleware } from "redux";
// redux dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";
// root reducer (combination) of all reducers
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
