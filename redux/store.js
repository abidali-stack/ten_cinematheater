import { configureStore } from '@reduxjs/toolkit';
import { persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const authPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ['home'],
};

const persistedReducer = persistReducer(authPersistConfig,rootReducer);

const store = configureStore({
  reducer:persistedReducer,
  
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
