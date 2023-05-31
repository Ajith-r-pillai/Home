import "./Profile.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import Adminheader from './Adminheader';
import Footer from './Footer';
import  './Postcard.css';
import  './Home.css';
import  './Profile.css';

function Profile() {
  const params = useParams();
  const [Upost, setupost] = useState([]);
  // const[currentuser,setcurrentuser]=useState([]);
  const [uid, setuId] = useState("");
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [location, setlocation] = useState("");
  const [contactno, setcontact] = useState("");
  const [upass, setUpass] = useState("");
  const [img, setImg] = useState("");
  const[type,SetType]=useState('')





const navigate=useNavigate()
  const fetchData = async () => {
    const result = await axios.get(
      "http://localhost:8000/getAllUpost/"+ params.id
    );
    setupost(result.data.posts);
  };

  const user=(JSON.parse(localStorage.getItem("currentuser") || " "))






  const getuser=async ()=>{
  const result=await axios.get('http://localhost:8000/getAUserp/'+params.id)
    // setcurrentuser(result.data.user);
    setUname(result.data.user.uname)
    setImg(result.data.user.img)
    setUemail(result.data.user.uemail)
    setlocation(result.data.user.location)
    setcontact(result.data.user.contactno)

    setUpass(result.data.user.upass)
    setuId(result.data.user.uid)
     }


     const handleUpdate = async (e) => {
      e.preventDefault();
    
      const body = {
          uid,
          uname,
          uemail,
          location,
          contactno,
          img,
          upass,
          type
        };
        try{
          const result = await axios.post("http://localhost:8000/edituser",body);
          alert(result.data.message);
          // Navigate('/')
          }
          catch(error){
         
              alert(error.response.data.message)
            }
       
      };




  const postdelete=async (id) => {
    const result = await axios.delete("http://localhost:8000/deletepost/"+id);
    alert(result.data.message);
    //  console.log(result.data.resu);
    // navigate('profile')
    fetchData();
  };
  console.log(location);
  // console.log(currentuser);
  
  useEffect(() => {
    fetchData()
    getuser()
  }, []);
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str
       }

  return (
  <div>
   
      <div className="" >
      {
      user=="admin"?<Adminheader/>:<Header/>
     }                                
        </div>
      <div style={{width:'100%',display:'flex',justifyContent:"center",marginTop:'2rem'}}>
          <div class="container rounded bg-white mt-5 mb-5">
          {/* {
      currentuser.map((item, index) => ( */}
      <div class="row">
      
      
          <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={img}/><span class="font-weight-bold">{uname}</span><span class="text-black-50"></span><span>{uemail} </span></div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right">Profile Settings</h4>
                  </div>
                  <div class="row mt-2">
                      <div class="col-md-6"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}   class="labels">Name  <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input onChange={(e)=>setUname(e.target.value)} type="text" class="form-control" placeholder="first name" value={uname}/></div>
  
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Mobile Number   <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input onChange={(e)=>setcontact(e.target.value)} type="text" class="form-control" placeholder="enter phone number" value={contactno}/></div>
                    
                      <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Email ID   <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input onChange={(e)=>setUemail(e.target.value)} type="text" class="form-control" placeholder="enter email id" value={uemail}/></div>
                      <div class="col-md-12"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">URL of Profile Picture   <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input  onChange={(e)=>setImg(e.target.value)} type="text" class="form-control" placeholder="enter email id" value={img}/></div>
                   
                  </div>
                  <div class="row mt-3">
      
                      <div class="col-md-6"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Location   <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input onChange={(e)=>setlocation(e.target.value)} type="text" class="form-control" placeholder="" value={location} /></div>
  
                  </div>
                  <div class="row mt-3">
      
                      <div class="col-md-6"><label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}} class="labels">Reset Password   <Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></label><input onChange={(e)=>setUpass(e.target.value)} type="password" class="form-control" placeholder="" value={upass} /></div>
  
                  </div>
                  {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
              </div>
          </div>
      
        
      </div>
          {/* ))} */}
  </div>
  
      </div>


        {/* <div className='pcard' style={{marginTop:'3rem'}}>
{

Upost.map((item, index) => (
<Postcard data={item}></Postcard>

        ))
}</div> */}


    <div className="animationCard" style={{marginTop:'2rem',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginLeft:'0',marginRight:'0',marginBottom:"3rem"}}>
       <div class="container1"style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}} >
       {Upost.map((item, index) => (
    
            <div class="card" style={{marginTop:"3rem"}}>
                <div class="face face1">
                    <div class="content">
                        <img src={item.img}/>
                       
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>{item.location}<i style={{color:'red'}} class="fa-solid fa-location-dot"></i></p>
                  <p><span style={{fontSize:'1.3rem'}}>Details</span> :{truncate(item?.details,30)}</p>
                  <p>{item.rate} <i class="fa-solid fa-indian-rupee-sign"></i></p>
        
                    <Button className="btnn3"  onClick={() => postdelete(item.id)} variant="danger">
                    <i class="fa-solid fa-trash"></i>
                  Delete
                </Button>
             
              <Link to={"/edit/"+ item.id} style={{border:'0',}}>
                  <Button className="btnn3"  variant="" style={{backgroundColor:'#2ddf2d'}}>
                  <i class="fa-regular fa-pen-to-square"></i>
                    Edit
                  </Button>
                  </Link>
                    </div>
                </div>
            </div>
      
          
        
          ))}
            </div>
   </div>

         
 
   
      {/* <div className="spost">
       
          <Link  style={{ textDecoration: "none" }}>
            <Card className="ppostcard"
             style={{ width: '25rem',backgroundColor:'#c1cacf',color:'rgb(21,76,121)',borderRadius:'5rem',height:'31rem',textDecoration:'none',marginTop:'1rem'}}
            >
              <Card.Img style={{height:"18rem",padding:'2rem',borderRadius:'7rem'}} variant="top" src="" />
              <Card.Body style={{ overflow: "hidden" }}>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Button onClick={() => postdelete(item.id)} variant="danger">
                <i class="fa-solid fa-user-xmark me-2"></i>
                Delete
              </Button>
           <Link to={"/edit/"+ item.id}>
                  <Button  variant="danger">
                    <i class="fa-solid fa-user-xmark me-2"></i>
                    Edit
                  </Button>
           </Link>
            </Card>
          </Link>

      </div> */}
      <Footer></Footer>
    </div>
    
  );
}

export default Profile;
