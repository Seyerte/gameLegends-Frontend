
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games' element={<Games/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
