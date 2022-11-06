import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Navbar/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </div>
  );
}

export default App;
