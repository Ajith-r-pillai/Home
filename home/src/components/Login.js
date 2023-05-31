import React, {  useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";  
import Home from "./Home";
import './Login.css'



function Login() {
  const [uemail, setUemail] = useState("");
const [upass, setUpass] = useState("");
const [cuser,setcuser] = useState("");
const [cuid,setCuid] = useState("");
let navigate=useNavigate()

const userLogin = async (e) => {
  e.preventDefault();
    const body = {
        uemail,
        upass
    };
    try{
    const result = await axios.post("http://localhost:8000/userLogin",body);
      alert(result.data.message);
      localStorage.setItem("currentid",JSON.stringify(result.data.currentid))
      localStorage.setItem("currentuser",JSON.stringify(result.data.currentuser))
      // console.log(result.data);
      const id=(JSON.parse(localStorage.getItem("currentid") || " "))
     navigate('home')
        }
        catch(error){
      
alert(error.response.data.message)

console.log(error.response.data.message);

    }
  }


  return (
   <div className="main " style={{margin:'0',width:'100%',height:'100vh',display:'flex'}}> 
    <div className="log1"  style={{width:'50%'}}>
      <h2 style={{color:"rgba(215,86,67,255)",marginLeft:'10rem',fontSize:'3rem'}}>Sign In</h2>
    <img className="logimg" style={{width:'72%',marginLeft:'10rem'}} src="https://i.postimg.cc/Vk6MnWc2/3652005-removebg-preview.png"/ >
    </div >
 
      
    <div style={{width:'58%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Form className="">
     {" "}
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       {" "}
       <Form.Label style={{fontFamily:"-webkit-body",color:"rgba(94,114,141,255)",fontSize:"1.3rem"}}>email</Form.Label>
       <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setUemail(e.target.value)} type='email' placeholder="enter your name" />{" "}
       </Form.Group>
    
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
       {" "}
       <Form.Label style={{fontFamily:"-webkit-body",color:"rgba(94,114,141,255)",fontSize:"1.3rem"}}>password</Form.Label>{" "}
       <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setUpass(e.target.value)} type='password'  placeholder=" enter your password" />{" "}
     </Form.Group>
  
      <Button className="ms-5" style={{backgroundColor:"rgba(215,86,67,255)",color:'white',width:'9rem' ,height:'2.8rem'}}  onClick={(e) => userLogin(e)}  variant="light">
       sign-in
     </Button>
     <p style={{marginTop:'5px'}} >Don't Have an account<Link to={'registation'}>Sign Up</Link></p>
    
   </Form>
    </div>
 </div>

  
)}

export default Login