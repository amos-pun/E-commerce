import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './App.css';
import MyRoutes from './MyRoutes';
import { cartReducer } from './Reducers/cartReducer';
import { itemReducer } from './Reducers/itemReduceer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
 

function App() {

  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  })

  const myPersistedReducer =  persistReducer(persistConfig, rootReducer)
  const myStore = createStore(myPersistedReducer)

  const myPersistor = persistStore(myStore)
  
  return (
    <div>
    <Provider store={myStore}>
    <PersistGate persistor={myPersistor}>
      <MyRoutes/>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
