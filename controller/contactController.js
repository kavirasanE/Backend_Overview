// for avioding the try and catch in async format we can use the express async handler
import asyncHandler from "express-async-handler";
import Contacts from "../models/contactModels.js";
//@description get all contacts
//@route GET all /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();
  res.status(200).json(contacts);
});

//@description create contact
//@route create /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("this is the data ", req.body);
  //we have to destructure the req.body (i.e, the data from from cilent)
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    // res.status(400).json({message:"please fill all the details "})
    req.status(400);
    throw new Error("all fields are mandatory");
  }

  const contact = await Contacts.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@description update contact
//@route update /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;  
  const contact = await Contacts.findById(id);
  if (!contact) {
    res.status(400);
    throw new Error("could not find");
  }
  const contacts = await Contacts.findByIdAndUpdate(id, req.body, { new: true });
  
  res.status(201).json(contacts);
});

//@description get  contact
//@route get  /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contacts.findById(id);
  if (!contact) {
    res.status(400);
    throw new Error("could not find");
  }
  res.status(200).json(contact);
});

//@description delete  contact
//@route delete /api/contacts
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contacts.findByIdAndDelete(id);
  res.json(contact);
});

export { getContact, createContact, updateContact, deleteContact, getContacts };
