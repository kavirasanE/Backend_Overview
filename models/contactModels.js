import mongoose from "mongoose";

const ContactSchema = mongoose.Schema ({
  name :{
    type:String,
    required:[true ,"please add the name"],
  },
  email :{
    type:String,
    required:true
  },
  phone :{
    typr:String,
    required:true
  }

},
{
    timestamps:true,
});

const contact = mongoose.model ("contact",ContactSchema)

export default contact 