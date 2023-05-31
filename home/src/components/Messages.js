import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from './Header'
import Adminheader from './Adminheader';
import Footer from './Footer';


function Messages() {
  const params = useParams();
  const navigate = useNavigate();
  const [allmsg, setallmsg] = useState([]);
  const [owner, setowner] = useState([]);
  const [sender, setsender] = useState([]);
  const user=(JSON.parse(localStorage.getItem("currentuser") || " "))
  const fetchData = async () => {
    const result = await axios.get(
      "http://localhost:8000/getAllmsg/" + params.id
    );
    // alert(result.data.message)
    setallmsg(result.data.data);
    // setsender(result.data.message)

    if (!result) {
      navigate("/home");
      alert("no messages");
    }
  };
  const mesgDelete = async (id) => {
    const result = await axios.delete(
      "http://localhost:8000/deleteMsg/"+id
    );
    alert(result.data.message);
    //  console.log(result.data.resu);
    fetchData();
  };
  console.log(allmsg);

  useEffect(() => {
    fetchData();
    // console.log(allmsg)
  }, []);

  return (
    <div>
       {
      user=="admin"?<Adminheader/>:<Header/>
     }
     <div style={{width:'100',height:'100vh'}}>
        <Table className="w-75 container" style={{marginTop:'7rem'}} striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
  
              <th>Sender</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allmsg.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.sender}</td>
  
                <td>{item.rmessage}</td>
  
                <td>
                  <Button onClick={() => mesgDelete(item._id)} variant="danger">
                    <i class="fa-solid fa-user-xmark me-2"></i>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
     </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Messages;
