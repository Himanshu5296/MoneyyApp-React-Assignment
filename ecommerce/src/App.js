import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart"element={<Cart/>}></Route>
    </Routes>
    </div>
  );
}

export default App;


