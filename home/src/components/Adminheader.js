import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import Sale from './Sale';
import Edit from './Edit';
import Button from 'react-bootstrap/Button';
function Adminheader() {
 
 
  let navigate=useNavigate()

  const logout=(e)=>{
    e.preventDefault()
    localStorage.removeItem("currentid")
    localStorage.removeItem("currentuser")
    navigate('/')
} 

const id=(JSON.parse(localStorage.getItem("currentid") || " "))

  return (
    <div>
   <div className='main7'>
    <div><Link to={'/home'} style={{fontSize:'2.5rem',textDecoration:'none',color:'white',fontFamily:'FontAwesome'}}><h4 style={{fontSize:'2.5rem',textDecoration:'none'}}>Home</h4></Link></div>

 <div className='nav1'>
   
   
   
     <div onClick={()=>{navigate('/adminp/'+id)}}  style={{textDecoration:'none',fontSize:'1.2rem'}}>  <p>Profile</p></div>
     <Button onClick={(e)=>logout(e)} style={{width:'6rem',height:'2.8rem',backgroundColor:'red',color:'white'}}variant="outline-danger">LogOut</Button>
         </div>
</div>
    </div>
  )
}

export default Adminheader