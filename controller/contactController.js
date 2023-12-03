//@description get all contacts
//@route GET all /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "this the operation" });
};

//@description create contact
//@route create /api/contacts
//@access public
const createContact = (req, res) => {
    console.log('this is the data ',req.body)
    //we have to destructure the req.body (i.e, the data from from cilent)
    const {name,email,phone} =req.body;
    if(!name || !email ||!phone) {
        res.status(400).json({message:"please fill all the details "})
    }
  res.status(201).json({ message: "this create the operation" });
};

//@description update contact
//@route update /api/contacts
//@access public
const updateContact = (req, res) => {
  const id = req.params.id;
  res.json({ message: `this the edit  operation ${id}` });
};

//@description get  contact
//@route get  /api/contacts
//@access public

const getContact = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `this is the get by id ${id}` });
};

//@description delete  contact
//@route delete /api/contacts
//@access public

const deleteContact = (req, res) => {
  const id = req.params.id;
  res.json({ message: `this the delete operation ${id}` });
};

export { getContact, createContact, updateContact, deleteContact, getContacts };
