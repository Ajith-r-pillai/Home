import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Header from './components/Header';
import View from './components/View';
import Sale from './components/Sale';
import Edit from './components/Edit';
import Messages from './components/Messages';
import SingleView from './components/SingleView';
import Profile from './components/Profile';
import Adminprofile from './components/Adminprofile';
import Userview from './components/Userview';
import UserprofileEdit from './components/UserprofileEdit';
import { useEffect } from 'react';
function App() {
 
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='registation' element={<Registration/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='view/:id' element={<View/>}></Route>
        <Route path='messages/:id' element={<Messages/>}></Route>
        <Route path='solo/:id' element={<SingleView/>}></Route>
        <Route path='profile/:id' element={<Profile/>}></Route>
        <Route path='sale' element={<Sale/>}></Route>
        <Route path='adminp/:id' element={<Adminprofile/>}></Route>
        <Route path='edit/:id' element={<Edit/>}></Route>
        <Route path='userview/:id' element={<Userview/>}></Route>
        <Route path='useredit' element={<UserprofileEdit/>}></Route>
        


   
      </Routes>
     
     
    </div>
  );
}

export default App;