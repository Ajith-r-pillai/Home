import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Adminheader from "./Adminheader";
import Footer from './Footer';

function Edit() {
  const [id, setId] = useState("");
  const [uid, Setuid] = useState("");
  const [aname, setaname] = useState("");
  const [rate, setRate] = useState("");
  const [location, setlocation] = useState("");
  const [details, setdetails] = useState("");
  const [contactno, setcontact] = useState("");
  const [img, setImg] = useState("");
  const [sortid, SetsortId] = useState("");
  let navigate = useNavigate();
  const params = useParams();
  const user = JSON.parse(localStorage.getItem("currentuser") || " ");

  const fetchPost = async () => {
    const result = await axios.get(
      "http://localhost:8000/getAnPost/" + params.id
    );
    //  console.log(result.data.employee);
    setaname(result.data.post.aname);
    setRate(result.data.post.rate);
    setlocation(result.data.post.location);
    setdetails(result.data.post.details);
    setcontact(result.data.post.contactno);
    setId(result.data.post.id);
    setImg(result.data.post.img);
    Setuid(result.data.post.uid);
    SetsortId(result.data.post.sortid);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = {
      id,
      uid,
      aname,
      rate,
      location,
      details,
      contactno,
      img,
      sortid
    };
    const result = await axios.post("http://localhost:8000/editPost",body);
    alert(result.data.message);
    navigate("/profile/" + uid);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const Sid = (un) => {
    if (un === "flat") {
      SetsortId("1");
    } else if (un === "house") {
      SetsortId("2");
    } else if (un === "plot") {
      SetsortId("3");
    }
  
  };
  // console.log(result);

  return (
    <div>
      {user == "admin" ? <Adminheader /> : <Header />}
<div  style={{width:'100%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
  
        <Form className="form6">
          {" "}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>which one is you selling<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>{" "}
            <Form.Control  style={{height:"2rem",width:'22rem'}} onChange={(e) =>e.target.value? setaname(e.target.value) || Sid(e.target.value): setaname(e.target.value)}
              type="text"
              placeholder="Flat/House/Plot"
              value={aname}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Location<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>{" "}
            <Form.Control  style={{height:"2rem",width:'22rem'}}
              onChange={(e) => setlocation(e.target.value)}
              type="text"
              placeholder=""
              value={location}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Details<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>
            <Form.Control  style={{height:"2rem",width:'22rem'}}
              onChange={(e) => setdetails(e.target.value)}
              type="text"
              placeholder=""
              value={details}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Rate<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>
            <Form.Control  style={{height:"2rem",width:'22rem'}}
              onChange={(e) => setRate(e.target.value)}
              type="text"
              placeholder=""
              value={rate}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Image<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>
            <Form.Control  style={{height:"2rem",width:'22rem'}}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder=""
              value={img}
             />{" "}
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Conact NO:<Button style={{color:'2ddf2d',width:'3rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i style={{color:'#2ddf2d'}} class="fa-regular fa-pen-to-square"></i></Button></Form.Label>
            <Form.Control  style={{height:"2rem",width:'22rem'}} 
              onChange={(e) => setcontact(e.target.value)}
              type="number"
              placeholder=""
              value={contactno}
            />{" "}
          </Form.Group>
          {/* <Button style={{backgroundColor:"#2ddf2d",color:'white',width:'9rem' ,height:'2.8rem'}}
            onClick={(e) => handleUpdate(e)}
            className="ms-5"
            variant="light"
          ><i class="fa-regular fa-pen-to-square"></i> 
            Update
          </Button> */}
        </Form>
</div>
{/* <Footer></Footer> */}
    </div>
  );
}

export default Edit;
