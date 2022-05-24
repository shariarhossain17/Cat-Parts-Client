import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import RequireAuth from './Pages/Authentication/RequireAuth';
import RequireNonAdmin from './Pages/Authentication/RequireNonAdmin';
import AddProfile from './Pages/Dashboard/AddProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import Alluser from './Pages/Dashboard/Admin/Alluser';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
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
        <Route index element={<MyProfile></MyProfile>}> </Route>
        <Route path='my-order' element={
          <RequireNonAdmin>
            <Myorder></Myorder>
          </RequireNonAdmin>
        }></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='add-review' element={
          <RequireNonAdmin>
            <AddReview></AddReview>
          </RequireNonAdmin>
        }></Route>
        <Route path='add-profile' element={<AddProfile></AddProfile>}></Route>
        <Route path='update-profile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='all-user' element={<RequireAdmin>
          <Alluser></Alluser>
        </RequireAdmin>}></Route>
        <Route path='add-product' element={<RequireAdmin>
          <AddProduct></AddProduct>
        </RequireAdmin>}></Route>
        <Route path='manage-product' element={<RequireAdmin>
          <ManageProducts></ManageProducts>
        </RequireAdmin>}></Route>
        <Route path='manage-all-orders' element={<RequireAdmin>
          <ManageAllOrders></ManageAllOrders>
        </RequireAdmin>}></Route>
        
      



        </Route>


        <Route path='/login'element={<Login/>}></Route>
        <Route path='/signup'element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
