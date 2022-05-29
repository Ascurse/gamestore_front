import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
import { store } from './redux';
import Header from './components/header/Header';
import GamePage from './pages/gamepage/GamePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:title" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
