
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import GameDetail from './pages/GameDetail/GameDetail';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home';
import GameForm from './pages/GameForm/GameForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/gamedetail/:id' element={<GameDetail/>}/>
        <Route path ='/games/add' element={<GameForm/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
