import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
