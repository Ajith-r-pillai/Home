import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import Header from './Header'
import Adminheader from './Adminheader';
import './Sale.css'
import Footer from './Footer';
function Sale() {
   
   let navigate=useNavigate()
    const [id, setId] = useState("");
    const [sortid, SetsortId] = useState("");
    const [aname, setaname] = useState("");
    const [rate, setRate] = useState("");
    const [location, setlocation] = useState("");
    const [details, setdetails] = useState("");
    const [contactno, setcontact] = useState("");
    const [img,setImg] = useState("");
    const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
useEffect(()=>{
    setId(uuid().slice(0,3))
       },[])
      
      const Sid=(un)=>{
        if(un==="flat"){
            SetsortId("1")
          }
          else if(un==="house"){
            SetsortId("2")
          }
          else if(un==="plot"){
            SetsortId("3")
          }
       }
    //    console.log(sortid);
       const addPost= async (e)=>{
        e.preventDefault()
      setId(uuid().slice(0,3))
     
     const uid=(JSON.parse(localStorage.getItem("currentid") || " "))
      const body={
        id,
        sortid,
        aname,
        rate,
        location,
        details,
        contactno,
        img,
        uid
      }
     
    try{
     const result=await axios.post('http://localhost:8000/addPost',body)
    
    alert(result.data.message)
    navigate('/home')
}catch(error){
    navigate('/home')
alert(error.response.data.message)

    // console.log(result.data.message );
        // console.log(uname);
        // console.log(addid);
        // console.log(age);
        // console.log(desig);
   }
   
  
    
      }

  return (
    <div>
       {
      user=="admin"?<Adminheader/>:<Header/>
     }
 <div  style={{width:'100%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'3rem'}}>
          <Form  className="form6">
          {" "}
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>which one is you selling</Form.Label>{" "}
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>e.target.value ? setaname(e.target.value) || Sid(e.target.value) :setaname(e.target.value)} type="text" placeholder="Flat/House/Plot" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Location</Form.Label>{" "}
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setlocation(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Details</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setdetails(e.target.value)} type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Rate</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setRate(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Image</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setImg(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Conact NO:</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setcontact(e.target.value)} type="number" placeholder="" />{" "}
          </Form.Group>
          <Button style={{backgroundColor:"#2ddf2d",color:'white',width:'9rem' ,height:'2.8rem'}} onClick={(e)=>addPost(e)} className="ms-5" variant="light">
          <i class="fa-regular fa-square-plus"></i>  Post
          </Button>
          </Form>
 </div>
 {/* <Footer></Footer> */}
    </div>
  )
}

export default Sale