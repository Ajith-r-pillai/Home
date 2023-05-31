import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import './Registration.css'
import InputGroup from 'react-bootstrap/InputGroup';
import {  Link, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
function Registration() {
  const [uid, setuId] = useState("");
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [location, setlocation] = useState("");
  const [contactno, setcontact] = useState("");
  const [upass, setUpass] = useState("");
  const [img, setImg] = useState("");
  const[type,SetType]=useState('')

//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
// setValidated(true);
   
// }
  useEffect(() => {
    setuId(uuid().slice(0, 3));
 
  }, []);
  let Navigate = useNavigate();
  const Type=(un)=>{
    if(un==="admin"){
      SetType("admin")
      }
      else{
        SetType("user")
      }
     
      }
  const userRegistration = async (e) => {
  e.preventDefault();
    setuId(uuid().slice(0, 3));
    
    
     
 
    const body = {
      uid,
      uname,
      uemail,
      location,
      contactno,
      img,
      upass,type
    };
    try{
      const result = await axios.post("http://localhost:8000/userRegistration",body);
      alert(result.data.message);
      Navigate('/')
      }
      catch(error){
     
          alert(error.response.data.message)
        
              
      }
   
  };
  return (
    <div className="main " style={{margin:'0',width:'100%',height:'100vh',display:'flex'}}> 
    <div style={{width:'50%'}}>
      <h2 style={{color:"rgba(215,86,67,255)",marginLeft:'10rem',fontSize:'3rem'}}>SignUp</h2>
    <img className="regimg" style={{width:'100%'}} src="https://i.postimg.cc/CKpMqy95/4348943-removebg-preview.png"/ >
    </div >
 
    <div className="reg2"  style={{width:'50%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Form className="" style={{marginRight:'10rem'}} >
          {" "}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>User Name</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>e.target.value ? setUname(e.target.value) || Type(e.target.value):setUname(e.target.value)}   type="text"
              placeholder=""
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Email</Form.Label>{" "}
            <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setUemail(e.target.value)} type="email" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>your Location</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setlocation(e.target.value)}  type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Cotact NO:</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setcontact(e.target.value)}  type="number" placeholder="" />{" "}
          </Form.Group>
          <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Image</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setImg(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Set Password</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setUpass(e.target.value)} type="password" placeholder="" />{" "}
          </Form.Group>
          
        
            <Button style={{backgroundColor:"rgba(215,86,67,255)",color:'white',width:'9rem' ,height:'2.8rem'}}
              onClick={(e) => userRegistration(e)}
              className="ms-5"
              variant=""
            >
              SignUp
            </Button><p style={{marginTop:'5px'}}>Already Reigsterd <Link to={'/'}>Sign In </Link></p>
       
            </Form> 
        
       
    </div>

    </div>
  )
}

export default Registration;
