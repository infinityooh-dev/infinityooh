import { configureStore } from '@reduxjs/toolkit';
import ContactModalsReducer from './slices/ContactModalsSlices';


export const store = configureStore({
  reducer: {
    contactModals: ContactModalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
