import React, { useEffect, useState } from 'react'
import './UserView.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Header from './Header'
import Adminheader from './Adminheader';
 import Postcard from './Postcard';
 import Footer from './Footer';
 import './Home.css'
function Userview() {

    const[user,setUser]=useState([])
    const[cupost,setupost]=useState([])
    const cuser=(JSON.parse(localStorage.getItem("currentuser") || " "))
    const params=useParams()

    const Userpost = async () => {

        const result = await axios.get(
          "http://localhost:8000/getAllUpost/" + params.id
        );
        setupost(result.data.posts);
      };


    const fetchData=async ()=>{
       
        const result=await axios.get('http://localhost:8000/getAUser/'+params.id)
       setUser(result.data.user);
         }
       
          useEffect(()=>{
            fetchData()
            Userpost()
          },[])
  return (
    <div>
         {
      cuser=="admin"?<Adminheader/>:<Header/>
     }
      
      <div style={{width:'100%',display:'flex',justifyContent:"center",marginTop:'2rem'}}>
            <div class="container rounded bg-white mt-5 mb-5">
         {
         user.map((item)=>(
        <div class="row">
        
        
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={item.img}/><span class="font-weight-bold">{item.uname}</span><span class="text-black-50"></span><span>{item.uemail} </span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right" style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"3.3rem"}}>Profile</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}   class="labels">Name</label><input  type="text" class="form-control" placeholder="first name" value={item.uname}/></div>
    
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Mobile Number </label><input type="text" class="form-control" placeholder="enter phone number" value={item.contactno}/></div>
                      
                        <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Email ID   </label><input  type="text" class="form-control" placeholder="enter email id" value={item.uemail}/></div>
                        <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">URL of Profile Picture  </label><input type="text" class="form-control" placeholder="enter email id" value={item.img}/></div>
                     
                    </div>
                    <div class="row mt-3">
        
                        <div class="col-md-6"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Location   </label><input  type="text" class="form-control" placeholder="" value={item.location} /></div>
    
                    </div>
                    
                    {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                </div>
        
                </div>
                </div>
           ))}
           </div>
            </div>
         

        
       
   
  
   <div className='pcard'>
    {cupost.map((item)=>(<Postcard data={item}></Postcard>

   ))}
    </div>
    <Footer></Footer>
    
    </div>
  
   
  )
}

export default Userview