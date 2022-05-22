import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Home from './Pages/Home/Home';
import Parts from './Pages/Home/Parts';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/parts/:id'element={<RequireAuth>
          <Parts/>
        </RequireAuth>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/signup'element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
