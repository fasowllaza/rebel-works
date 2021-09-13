import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import moviesReducer from "./reducers/moviesReducer"

const middlewares = applyMiddleware(ReduxThunk)
const store = createStore(moviesReducer, middlewares)
export default store