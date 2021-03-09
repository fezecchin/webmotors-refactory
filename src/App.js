import GlobalStyle from './styles/global';
import {Provider} from 'react-redux'
import store from './components/store'
import Home from './components/Home';


function App() {
  return (
    <Provider store={store}>
      <Home/>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
