const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/home",{ useNewUrlParser: true });

const admin = mongoose.model("admin", {
  id:String,
  aname:String,
  apass:String,
  aemail:String,
});
const user = mongoose.model("user", {
    uid:String,
    uname:String,
    uemail:String,
    location:String,
    contactno:Number,
    img:String,
    upass:String,
    type:String
   

  });
const post = mongoose.model("post", {
     id:String,
     uid:String,
     sortid:String,
     aname:String,
     rate:String,
     details:String,
     location:String,
     contactno:Number,
     img:String
  });
  const message = mongoose.model("message", {
          pid:String,
          uid:String,
      rmessage:String,
      owner:String,
      sender:String
  })


module.exports = {
  admin,user,post,message
    };