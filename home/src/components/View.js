import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './View.css'
import Header from './Header'
import Footer from './Footer';
import Adminheader from './Adminheader';
function View() {

  const [post,setpost]=useState([])
  const [searchkey, setsearchkey] = useState("");
  const [employ, setemp] = useState('');

  const params=useParams()
  const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
  const fetchData=async ()=>{
  const result=await axios.get('http://localhost:8000/viewPost/'+params.id)
  // alert(result.data.message)
  setpost(result.data.post);
   }
    console.log(post);
    
    useEffect(()=>{
      fetchData()
      // console.log(params);
  },[])
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str
       }
    
  return (
    <div>
       {
      user=="admin"?<Adminheader/>:<Header/>
     }
      <div style={{width:'100%',height:'100vh'}}>
         <div className='searchh'style={{marginTop:'6rem'}}> <p style={{fontSize:'1.5rem',marginTop:'5px',color:'#2596be',fontFamily:'ui-monospace'}}  >Enter Your Budget</p>  <input id='inp' type="text" style={{outline:'none'}} placeholder='' onChange={(e)=>setemp(e.target.value)}/></div>
         <div className='searchh'>  <p style={{fontSize:'1.5rem',marginTop:'5px',color:'#2596be',fontFamily:'ui-monospace'}} > Enter The Location </p>  <input id='inp' type="text" style={{outline:'none'}} placeholder="" onChange={(e)=>setsearchkey(e.target.value)}/></div>
      
        
        
        {/* {
      post.filter((val) => {
        if (searchkey == "") {
        return val
      } else if (
       val.location.toLowerCase().includes(searchkey.toLowerCase())&&employ<=val.rate)  {
        return val
      }}) 
    .map((item, index) => ( 
        <Link to={'/solo/'+item.id} style={{textDecoration:'none'}}>
        <Card className='vpostcard'  style={{ width: '25rem',backgroundColor:'#c1cacf',color:'rgb(21,76,121)',borderRadius:'5rem',height:'31rem',textDecoration:'none',marginTop:'1rem'}}>
    <Card.Img style={{height:"18rem",padding:'2rem',borderRadius:'7rem'}} variant="top" src={item.img} />
    <Card.Body style={{overflow:'hidden'}}>
      <Card.Title>{item.aname}</Card.Title>
      <Card.Text>
  </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  
       ))
  }
  </div>
  </div> */}
          <div className="animationCard" style={{marginTop:'7rem',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginLeft:'0',marginRight:'0'}}>
         
         
       <div class="container1"style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginBottom:'3rem'}} >
        {  post.filter((val) => {
        if (searchkey == "") {
        return val
      } else if (
       val.location.toLowerCase().includes(searchkey.toLowerCase())&&employ<=val.rate)  {
        return val
      }}) 
    .map((item, index) => ( (
           <Link to={'/solo/'+item.id} style={{textDecoration:'none'}}>
               <div class="card" style={{marginTop:"3rem"}}>
                   <div class="face face1">
                       <div class="content">
                           <img src={item.img}/>
                          
                       </div>
                   </div>
                   <div class="face face2">
                       <div class="content">
                           <p>{item.location} <i style={{color:'red'}} class="fa-solid fa-location-dot"></i></p>
                     <p><span style={{fontSize:'1.3rem'}}></span> :{truncate(item ?.details,50)}</p>
                     <p>Rate:{item.rate} <i class="fa-solid fa-indian-rupee-sign"></i> </p>
                               
                       </div>
                   </div>
               </div>
           </Link>
             
           
             )))
             }
               </div>
      </div>
      </div>
    {/* <Footer></Footer> */}
    </div>

  
  )
}

export default View