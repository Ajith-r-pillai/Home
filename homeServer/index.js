const express=require('express')
const logic=require('./service/logic')

const server=express()  
const cors=require('cors')
 server.use(cors({origin:'http://localhost:3000'}))

 server.use(express.json())

 server.listen(8000,()=>{
    console.log("server started at port 8000");
 })


 server.post('/userRegistration',(req,res)=>{
   logic.userRegistration(req.body.uid,req.body.uname,req.body.uemail,req.body.location,req.body.contactno,req.body.img,req.body.upass,req.body.type).then(result=>{
       res.status(result.statusCode).json(result)
   })
})
 server.post('/userLogin',(req,res)=>{
   logic.userLogin(req.body.uemail,req.body.upass).then(result=>{
       res.status(result.statusCode).json(result)
   })
})
 server.post('/addPost',(req,res)=>{
   logic.addPost(req.body.id,req.body.uid,req.body.sortid,req.body.aname,req.body.rate,req.body.details,req.body.location,req.body.contactno,req.body.img).then(result=>{
       res.status(result.statusCode).json(result)
   })
})
 server.post('/sndMsg',(req,res)=>{
   logic.sndMsg(req.body.postid,req.body.cuid,req.body.message,req.body.owner,req.body.sender).then(result=>{
       res.status(result.statusCode).json(result)
   })
})
server.get('/viewPost/:id',(req,res)=>{
  logic.viewPost(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
      server.get('/getAllmsg/:id',(req,res)=>{
  logic.getAllmsg(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAllpost',(req,res)=>{
  logic.allpost().then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAllUpost/:id',(req,res)=>{
  logic.getAllUpost(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAnPost/:id',(req,res)=>{
  logic.getAnPost(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAUser/:id',(req,res)=>{
  logic.getAUser(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAUserp/:id',(req,res)=>{
  logic.getAUserp(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})


server.delete('/deleteMsg/:id',(req,res)=>{
  logic.deleteMsg(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.delete('/deleteuser/:id',(req,res)=>{
  logic.deleteuser(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.delete('/deletepost/:id',(req,res)=>{
  logic.deletepost(req.params.id).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.post('/editPost',(req,res)=>{
  logic.editPost(req.body.id,req.body.uid,req.body.aname,req.body.rate,req.body.details,req.body.location,req.body.contactno,req.body.img,req.body.sortid).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.post('/edituser',(req,res)=>{
  logic.edituser(req.body.uid,req.body.uname,req.body.uemail,req.body.location,req.body.contactno,req.body.img,req.body.upass).then(result=>{
      res.status(result.statusCode).json(result)
  })
})
server.get('/getAllUser',(req,res)=>{
  logic.getAllUser().then(result=>{
      res.status(result.statusCode).json(result)
  })
})