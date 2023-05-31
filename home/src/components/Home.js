import React, { useEffect, useState } from 'react'
import Header from './Header'
import Adminheader from './Adminheader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import './Home.css'
import Postcard from './Postcard';
import axios from 'axios'


function Home() {
    const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
    // const userid=(JSON.parse(localStorage.getItem("currentid") || " "))
  

    // useEffect(()=>{
    //     console.log(uid);
    // },[])
  const  navigate=useNavigate()
    const [allpost, setAllpost] = useState([]);
    const [searchkey, setsearchkey] = useState("");
   
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/getAllpost");
      setAllpost(result.data.posts);
    }

    //   if(localStorage.getItem("currentuser")){     
     
    // }
    // else{
    //   navigate('/')
   
    // }
    // useEffect(() => {
      // Retrieve the user ID from local storage
      // const userId = localStorage.getItem('currentid');
  
      // Conditionally redirect to the home page if user ID exists
      // if (userId) {
      //   navigate('/home')
      //   fetchData()
         // Replace '/home' with the route for your home page
    //   }
    //   else{
    //     window.location.href = '/'; 
    //   }
    // }, []);

    useEffect(() => {
    const cid=(JSON.parse(localStorage.getItem("currentid") || " "))
      if(!cid){
        navigate('/')
      }else{
        fetchData()
      }
    }, []);
   
  return (
    <div>
 <div style={{height:'4rem',width:'100%'}}>
       {
        user=="admin"?<Adminheader/>:<Header/>
       }
 </div>
    {/* <div className='name'>welcome {user}</div> */}
   <div  className='First'>
   <div className='homeimg'>
      <p id='p1'>Find Your Next</p>
      <p id='p2'>Home</p>
    </div>
   </div>
   <div className='heading2' style={{width:'100%',textAlign:'center'}}> <p style={{fontSize:'2rem',color:'#063970',marginTop:'2rem'}}>Which One Is You Looking For</p></div>
    <div className='imag1'>
       <Link to={"/view/" + 1} style={{ textDecoration:'none',color:"#074b88",fontSize:'2rem',textAlign:'center',fontFamily:'Work Sans'}}> <img s src='https://i.postimg.cc/zG6Px9hP/pexels-sevenstorm-juhaszimrus-439391.jpg'/>
       <p>Flats</p> </Link>
    <Link to={"/view/" + 2} style={{ textDecoration:'none',color:"#074b88",fontSize:'2rem',textAlign:'center',fontFamily:'Work Sans'}}>  <img src='https://i.postimg.cc/xdLgtqnc/pexels-niki-nagy-1694360.jpg'/>
      <p >Home</p></Link>

      <Link to={"/view/" + 3} style={{ textDecoration:'none',color:"#074b88",fontSize:'2rem',textAlign:'center',fontFamily:'Work Sans'}}>  <img src='https://i.postimg.cc/BnT1zFP9/pexels-on-shot-4525178.jpg'/>
      <p>Plots</p></Link>
   </div >
  
<div className='searchh'> <i style={{fontSize:'1.7rem',marginTop:'5px',color:'#2596be'}} class="fa-solid fa-magnifying-glass"></i>  <input id='inp' type="text" style={{outline:'none'}} placeholder="Enter Location" onChange={(e)=>setsearchkey(e.target.value)}/></div>
   
   <div className='pcard' style={{marginTop:'3rem'}}>
   {
   allpost.filter((val) => {
      if (searchkey == "") {
      return val
    } else if (
     val.location.toLowerCase().includes(searchkey.toLowerCase()))  {
      return val
    }}) .map((item, index) => (
<Postcard data={item}></Postcard>
  ))
   }
  </div>
  <Footer></Footer>
    </div>
  )
}


export default Home