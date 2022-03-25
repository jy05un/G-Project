import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Board from './components/Board/Board.jsx';
import MyPage from './components/MyPage/MyPage';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="/home" element={<Home />} />
        <Route path="/board" element={<MyPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
