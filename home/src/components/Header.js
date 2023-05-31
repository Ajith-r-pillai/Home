import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import Sale from './Sale';
import Edit from './Edit';
import Button from 'react-bootstrap/Button';


function Header() {
    let navigate=useNavigate()

//     useEffect(()=>{
// try{    if(localStorage.getItem("currentuser")){
//       navigate('/home')
    
//      }}
//         catch(error){
//     alert("please login")
//     navigate('/')
//   }
//     })


const logout=(e)=>{
    e.preventDefault()
    localStorage.removeItem("currentid")
    localStorage.removeItem("currentuser")
    navigate('/')
} 
const id=(JSON.parse(localStorage.getItem("currentid") || " "))

  return (
  <div className='main7'>
    <div className='Heading' style={{width:'40%'}}><Link to={'/home'} style={{textDecoration:'none',color:'white'}}><h4 style={{fontSize:'2.5rem',textDecoration:'none',fontFamily:'FontAwesome'}}>Home</h4></Link></div>

 <div className='nav1'>
       <div className='nav2' onClick={()=>{navigate('/sale')}} style={{textDecoration:'none',fontSize:'1.2rem'}}> <p>Sale</p></div>
     <div className='nav2' onClick={()=>{navigate('/messages/'+id)}}  style={{textDecoration:'none',fontSize:'1.2rem'}}> <p> Messages</p></div>
   
     <div className='nav2' onClick={()=>{navigate('/profile/'+id)}}  style={{textDecoration:'none',fontSize:'1.2rem'}}>  <p>Profile</p></div>
     <Button onClick={(e)=>logout(e)} style={{width:'6rem',height:'2.8rem',backgroundColor:'red',color:'white'}} variant="outline-danger">LogOut</Button>
  </div>
</div>

  )
}

export default Header