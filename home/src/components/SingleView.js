import React, { useEffect, useState } from 'react'
import './SingleView.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Header from './Header'
import Adminheader from './Adminheader';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './SingleView.css'
function SingleView() {

    const [cpost,setpost]=useState([])
    const [message,setmessage]=useState([])
    const[owner,setowner]=useState("")
    const params=useParams()
   const navigate=useNavigate()
   const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
   const sndMsg= async(e)=>{
        e.preventDefault();
        const id=(JSON.parse(localStorage.getItem("currentid") || " "))
        const sender=(JSON.parse(localStorage.getItem("currentuser") || " "))
       const body={
        postid:params.id,
          cuid:id,
           message,
           owner,
           sender
          
    }

    try{
        const result=await axios.post('http://localhost:8000/sndMsg',body)
       alert(result.data.message)
      
   }catch(error){
     
   alert(error.response.data.message)
    }
}
    // console.log(message);
    const fetchData=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnPost/'+params.id)
    setowner(result.data.post.uid)
    setpost(result.data.post);
     }
   
      useEffect(()=>{
        fetchData()
      },[])
  return (
   

    <div >
       {
      user=="admin"?<Adminheader/>:<Header/>
     }
     {
      <div className='viewmain'style={{marginTop:'6rem',height:'100vh',width:'100%'}}>
  

        <div className='viewimgbox' style={{marginBottom:'3rem'}}>
            <img className='viewimg' src={cpost.img}  alt=''/>
        </div>
        <div className='viewdetails'  >
            <h1 className='viewhead'>{cpost.location}<i style={{color:'red'}} class="fa-solid fa-location-dot"></i></h1>
            <p className='viewcontent'>{cpost.contactno}</p>
            <p className='viewcontent'>Details<i class="fa-solid fa-circle-info"></i></p>
            <p className='viewcontent' style={{width:'30rem'}}> <p style={{fontSize:'1rem',marginTop:'-2.5rem'}}>{cpost.details}</p></p>
            <p className='viewcontent'>{cpost.rate}  <i style={{fontSize:'1.2rem'}} class="fa-solid fa-indian-rupee-sign"></i></p>
            <Form style={{width:'32rem'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               {/* <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} >if you intested send a message for conact</Form.Label> */}
                  <Form.Control  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem",textAlign:'center'}} className='mesgfield' onChange={(e)=>setmessage(e.target.value)} as="textarea" placeholder='send a message for conact ' rows={3} />
             </Form.Group>
           </Form>
            <Button className="ms-5" style={{backgroundColor:'#2ad92a',borderRadius:'2rem',color:'white'}} onClick={(e) =>sndMsg(e)}  variant="light">
            Send a message <i class="fa-solid fa-envelope"></i>
          </Button>
        
          <Link to={'/userview/'+owner}>
              <Button className="ms-5" style={{backgroundColor:'#2ad92a',borderRadius:'2rem',color:'white',marginTop:'1rem'}}   variant="light">
          View The Owner 
            </Button>
          </Link>
        
          </div>
      </div>
    }
    
 


{/* <Footer></Footer> */}
    </div>
  )
}

export default SingleView