import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from './Header'
import Adminheader from './Adminheader';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
import './Adminprofile.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Adminprofile() {


const[users,Allusers]=useState([])
const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
const fetchData = async () => {
        const result = await axios.get("http://localhost:8000/getAllUser");
        Allusers(result.data.users);
      };
      const postdelete = async (id) => {
        const result = await axios.delete("http://localhost:8000/deletepost/"+id);
        // alert(result.data.message);
        //  console.log(result.data.resu);
        // navigate('profile')
        fetchData();
      };
     const handleDelete=async(id)=>{
        postdelete(id)
        const result = await axios.delete("http://localhost:8000/deleteuser/"+id);
        alert(result.data.message);
        //  console.log(result.data.resu);
        // navigate('profile')
        fetchData();
     }
      useEffect(()=>{
        fetchData()
      },[])
  return (
    <div>
    <div>
    {
     user=="admin"?<Adminheader/>:<Header/>
    
   
}
</div >
   
 <div style={{width:'100%',height:'100vh'}}> 




<div  style={{marginTop:'7rem',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginLeft:'0',marginRight:'0'}}>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
     <Row xs={1} md={2} className="g-4" style={{width:"43rem",height:"6rem"}}>
      {
     users.map((item, index) => (
            <Col >
              <Card>
                <Card.Img variant="top" style={{height:'14rem'}} src={item.img} />
                <Card.Body>
                  <Card.Title>{item.uname}</Card.Title>
                  <Card.Text>
                  <Button
                      onClick={() => handleDelete(item.uid)}
                      variant="danger"
                    >
                      <i class="fa-solid fa-user-xmark me-2"></i>
                      Delete
                    </Button>
                    <Link to={"/userview/"+item.uid} >
                      <Button variant="light" className="me-3" style={{marginLeft:'3rem'}}>
                        <i class="fa-solid fa-book-open-reader me-2"></i>
                        View
                      </Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
</div>
</div>
{/* <div className="" style={{marginTop:'7rem',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginLeft:'0',marginRight:'0'}}>
<div  class="" >


      <div class="card shadow-sm border-0 rounded"  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        {
        users.map((item, index) => (
        <div class="card-body p-0"><img src={item.img} alt="" class="w-100 card-img-top"/>
          <div class="p-4">
            <h5 class="mb-0">{item.uname}</h5>
            <p class="small text-muted">{item.uemail}</p>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item m-0">   <Link to={"/userview/"+item.uid}>
                      <Button variant="light" className="me-3">
                        <i class="fa-solid fa-book-open-reader me-2"></i>
                        View
                      </Button>
                    </Link></li>
              <li class="list-inline-item m-0">     <Button
                      onClick={() => handleDelete(item.uid)}
                      variant="danger"
                    >
                      <i class="fa-solid fa-user-xmark me-2"></i>
                      Delete
                    </Button></li>
        
            </ul>
          </div>
        </div>
   
))}
   </div>
    </div>
    </div>  */}









       
{/* <div class="container mx-auto mt-4">
  <div class="row-adp">
    <div class="col-md-4">
      <div class="card-adp" style="width: 18rem;">
  <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-adp-img-top" alt="..."/>
  <div class="card-adp-body">
    <h5 class="card-adp-title">Card title</h5>
        <h6 class="card-adp-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-adp-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
  </div>
  </div>
    </div>    
    </div>    
    </div>     */}
     

    

   {/* <Table className="w-75 container" striped bordered hover variant="dark" style={{marginTop:'6rem'}}>
          
          <thead>
            <tr>
              <th>#</th>
  
              <th>Name</th>
  
              <th>Email</th>
  
              <th>Location</th>
  
              <th>Conact</th>
  
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
           users.map((item, index) => (
               <tr>
                  <td>{index + 1}</td>
  
                  <td>{item.uname}</td>
  
                  <td>{item.uemail}</td>
  
                  <td>{item.location}</td>
  
                  <td>{item.contactno}</td>
  
                  <td>
                 
                    <Link to={"/userview/"+item.uid}>
                      <Button variant="light" className="me-3">
                        <i class="fa-solid fa-book-open-reader me-2"></i>
                        View
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDelete(item.uid)}
                      variant="danger"
                    >
                      <i class="fa-solid fa-user-xmark me-2"></i>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table> */}
</div>
      {/* <Footer></Footer> */}
    </div>

  )
}

export default Adminprofile