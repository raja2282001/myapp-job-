import logo from './logo.svg';
import './App.css';
import NavPage from './components/Nav/NavPage';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import LoginPage from './components/Login/LoginPage';
import Profile from './components/profile/Profile';
import Userproduct from './components/profile/Userproduct';
import UserWishlist from './components/profile/UserWishlist';
import Product from './components/product/Product';



function App() {

  const location = useLocation();
  return (
    <div className="App">
        {location.pathname !== "/login" &&
       <NavPage/>
         }
       <Routes>
           <Route exact path="/"  element={<Home/>}/>
           <Route exact path="/product/:id"  element={<Product/>}/>
           <Route exact path="/login"  element={<LoginPage/>}/>
           <Route exact path="/profile"  element={<Profile/>}/>
           <Route exact path="/userproduct"  element={<Userproduct/>}/>
           <Route exact path="/wishlistdetail"  element={<UserWishlist/>}/>
       </Routes>
    </div>
  );
}

export default App;
