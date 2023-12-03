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
    type:Number,
    required:true
  }

},
{
    timestamps:true,
});

const Contacts = mongoose.model ("Contact",ContactSchema)

export default Contacts