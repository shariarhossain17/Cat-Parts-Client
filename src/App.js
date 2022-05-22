import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Pages/Authentication/RequireAuth';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Parts from './Pages/Home/Parts';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/purchase/:id'element={<RequireAuth>
          <Parts/>
        </RequireAuth>}></Route>
        <Route path='/dashboard'element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
        <Route index element={<Myorder></Myorder>}></Route>
        <Route index element={<Myorder></Myorder>}></Route>
        <Route path='add-review' element={<AddReview></AddReview>}></Route>
        <Route path='my-profile' element={<MyProfile></MyProfile>}></Route>



        </Route>


        <Route path='/login'element={<Login/>}></Route>
        <Route path='/signup'element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
