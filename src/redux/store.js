import createSagaMiddleware from 'redux-saga';
import saga from "./saga";
import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from './slices/detailsSlice';
import listSlice from './slices/listSlice';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    details: detailsSlice,
    list: listSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga);

export default store;
