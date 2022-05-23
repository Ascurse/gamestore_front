import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
import { store } from './redux';
import Header from './components/header/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Homepage />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
