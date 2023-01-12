import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './App.css';
import MyRoutes from './MyRoutes';
import { cartReducer } from './Reducers/cartReducer';
import { itemReducer } from './Reducers/itemReduceer';

function App() {

  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  })

  const myStore = createStore(rootReducer)
  
  return (
    <div>
    <Provider store={myStore}>
      <MyRoutes/>
    </Provider>
    </div>
  );
}

export default App;
