import React from 'react'
import './Postcard.css'
import Card from 'react-bootstrap/Card'
 import { Link } from 'react-router-dom'
 import './Postcard.css'

function Postcard({data}) {
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str
       }
 
  return (
    <>
       <Link to={'/solo/'+data.id} style={{textDecoration:'none'}}>

 
       <div class="container2" >
          <div class="card" style={{marginTop:"3rem"}}>
              <div class="face face1">
                  <div class="content">
                      <img src={data.img}/>
                     
                  </div>
              </div>
              <div class="face face2">
                  <div class="content">
                      <p>  <span style={{fontSize:'1.3rem'}}></span>{data.location}<i style={{color:'red'}} class="fa-solid fa-location-dot"></i></p>
                      <p><span style={{fontSize:'1.3rem'}}></span>{truncate(data?.details,50)}</p>
                      <p> <span style={{fontSize:'1.3rem'}}></span>{data.rate} <i class="fa-solid fa-indian-rupee-sign"></i></p>
                          {/* <a href=""><span style={{fontSize:'1.3rem'}}>Rate</span>: {data.rate} Rs</a> */}
                  </div>
              </div>
          </div>
          
          </div>

        
              {/* <Card className='postcard' style={{ width: '25rem',backgroundColor:'#c1cacf',color:'rgb(21,76,121)',borderRadius:'5rem',height:'31rem',textDecoration:'none',marginTop:'1rem'}}>
          <Card.Img variant="top" style={{height:"18rem",padding:'2rem',borderRadius:'7rem'}} src={data.img} />
          <Card.Body style={{overflow:'hidden'}}>
            <Card.Title>Location :{data.location}</Card.Title>
            <Card.Text><span style={{fontSize:'1.3rem'}}>Details</span>:{truncate(data?.details,150)}</Card.Text>
            <Card.Text style={{textAlign:'center'}}><span style={{fontSize:'1.3rem'}}>Rate</span>: {data.rate} Rs</Card.Text>
          </Card.Body>
        </Card> */}
       </Link>
      </>
      )}

export default Postcard