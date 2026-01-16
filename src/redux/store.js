import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";
import { createLogger } from "redux-logger";

const logger = createLogger()

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})