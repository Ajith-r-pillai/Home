const db=require('./db')

const userRegistration=(uid,uname,uemail,location,contactno,img,upass,type)=>{
    return db.user.findOne({uemail}).then(result=>{
         if(result){
             return {
                 statusCode:200,
                 message:"user already exist"
             }
         
             }
             else{
                 const newUSER=new db.user({
                    uid,uname,uemail,location,contactno,img,upass,type})
                    newUSER.save()
 
                 return{
                     statusCode:200,
                     message  :"user detailes added"
                     
                 }
         }
     })
 
 }
const userLogin=(uemail,upass)=>{
    return db.user.findOne({uemail,upass}).then(result=>{
         if(result){
        currentuser=result.uname
        currentid=result.uid
currentemail=result.uemail
             return {
                   statusCode:200,
                     message  :"login sucesess",
                     currentemail,
                     currentuser,
                     currentid
             }
            
             }
             else{
                return{
                    statusCode:404,
                    message:"user not exist"
                     
                 }
         }
     })
 
 }
 const addPost=(id,uid,sortid,aname,rate,details,location,contactno,img)=>{
    return db.post.findOne({id}).then(result=>{
         if(result){
             return {
                 statusCode:404,
                 message:"post already exist"
             }
         
             }
             else{
                 const newEMP=new db.post({
                    id,uid,sortid,aname,rate,details,location,contactno,img})
                 newEMP.save()
 
                 return{
                     statusCode:200,
                     message  :"Post detailes added"
                     
                 }
         }
     })
    }
 const sndMsg=(postid,cuid,message,owner,sender)=>{
    return db.post.findOne({id:postid,uid:cuid}).then(result=>{
         if(result){
             return {
                 statusCode:404,
                 message:"this is your post"
             }
         
             }
             else{
                 const newMSG=new db.message({
                    pid:postid,
                uid:cuid,
             rmessage:message,
            owner,
            sender
        })
            newMSG.save()
 
                 return{
                     statusCode:200,
                     message  :"message sended.."
                     
                 }
         }
     })
    }

    const viewPost=(eid)=>{
        return  db.post.find({sortid:eid}).then(result=>{
              if(result){
               return{
                   statusCode:200,
                   post:result
               }
              }
              else{
               return{
                   statusCode:404,
                   message:"post Not exist"
               }
              } 
           })
       }
    const getAllmsg=(eid)=>{
        return  db.message.find({owner:eid}).then(result=>{
              if(result){
              
               return{
                   statusCode:200,
                  data:result
               }
              }
              else{

               return{
                   statusCode:404,
                   message:"message Not exist"
               }
              } 
           })
       }

       const allpost=()=>{
        return db.post.find().then(result=>{
            if (result) {
                return {
                    statusCode:200,
                    posts: result
                }
            }
            else{
                return {
                    statusCode:404,
                    message:"no data avilabe"
                }
            }
        })
    }
       const getAllUpost=(id)=>{
        return db.post.find({uid:id}).then(result=>{
            if (result) {
                return {
                    statusCode:200,
                    posts: result
                }
            }
            else{
                return {
                    statusCode:404,
                    message:"no data avilabe"
                }
            }
        })
    }
    
    const getAnPost=(id)=>{
        return  db.post.findOne({id}).then(result=>{
              if(result){
               return{
                   statusCode:200,
                   post:result
               }
              }
              else{
               return{
                   statusCode:404,
                   message:"post Not exist"
               }
              } 
           })
       }
    const getAUser=(id)=>{
        return  db.user.find({uid:id}).then(result=>{
              if(result){
               return{
                   statusCode:200,
                   user:result
               }
              }
              else{
               return{
                   statusCode:404,
                   message:"post Not exist"
               }
              } 
           })
       }
   
    const getAUserp=(id)=>{
        return  db.user.findOne({uid:id}).then(result=>{
              if(result){
               return{
                   statusCode:200,
                   user:result
               }
              }
              else{
               return{
                   statusCode:404,
                   message:"post Not exist"
               }
              } 
           })
       }
   
   
       const deleteMsg=(id)=>{
        return db.message.deleteOne({_id:id}).then(result=>{
            if(result){
                
                return{
                    statusCode:200,
                    message :"Message removed",
                
                   }
    }
            else{
                return{
                    statusCode:404,
                    message:"Message Not exist"
                }
            }
        })
    }
       const deleteuser=(id)=>{
        return db.user.deleteOne({uid:id}).then(result=>{
            if(result){
                
                return{
                    statusCode:200,
                    message :"user removed",
                
                   }
    }
            else{
                return{
                    statusCode:404,
                    message:"user Not exist"
                }
            }
        })
    }
       const deletepost=(id)=>{
        return db.post.deleteOne({id}).then(result=>{
            if(result){
                
                return{
                    statusCode:200,
                    message :"Post  removed",
                
                   }
            
            }
            else{
                return{
                    statusCode:404,
                    message:"Message Not exist"
                }
            }
        })
    }
    const editPost=(id,uid,aname,rate,details,location,contactno,img,sortid)=>{
        return db.post.findOne({id}).then(result=>{
             if(result){
                 result.aname=aname,
                 result.details=details,
                 result.rate=rate,
                 result.location=location,
                 result.contactno=contactno,
                 result.img=img,
                 result.sortid=sortid
                 result.save()
     
                 return{
                     statusCode:200,
                     message :"Post updated",
                 
                    }
             }
             else{
                 return{
                     statusCode:404,
                     message:"Post Not exist"
                 }
     
             }
         })
     }
    const edituser=(id,uname,uemail,location,contactno,img,upass)=>{
        return db.user.findOne({uid:id}).then(result=>{
             if(result){
                 result.uname=uname,
                 result.uemail=uemail,
               
                 result.location=location,
                 result.contactno=contactno,
                 result.img=img,
                 result.upass=upass
                
                 result.save()
     
                 return{
                     statusCode:200,
                     message :"User details updated",
                 
                    }
             }
             else{
                 return{
                     statusCode:404,
                     message:"User Not exist"
                 }
     
             }
         })
     }
     const getAllUser=()=>{
        return db.user.find({type:'user'}).then(result=>{
            if (result) {
                return {
                    statusCode:200,
                    users: result
                }
            }
            else{
                return {
                    statusCode:404,
                    message:"no data avilabe"
                }
            }
        })
    }
  
       
 module.exports={
  
   
        userRegistration,userLogin,addPost,viewPost,allpost,
        getAnPost,sndMsg,getAllmsg,deleteMsg,getAllUpost,deletepost,editPost,getAllUser,
        deleteuser,getAUser,getAUserp,edituser
 }