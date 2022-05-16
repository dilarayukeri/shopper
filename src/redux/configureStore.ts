import {
    createStore,
    applyMiddleware,
    StoreEnhancer,
    Middleware,
    compose,
} from "redux";
import reduxThunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { rootReducer } from "./reducers/rootReducer";

const configureStore = () => {
    const middlewares: Middleware[] = [reduxThunk];

    const enhancer: StoreEnhancer = compose(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, enhancer);
    return store;
};

const store = configureStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
export default store;
