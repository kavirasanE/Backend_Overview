import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const router =express.Router();

router.get ('/', (req,res) => {
       res.json({message:"this the operation"})
});

router.post ('/', (req,res) => {
    res.json({message:"this create the operation"})
});

router.get ('/:id', (req,res) => {
    const {id }=req.params.id;
    res.json({message:`this the get contact  operation ${id}`});
});

router.delete ('/:id ', (req,res) => {
    const {id} =req.params.id;
    res.json({message:`this the delete operation ${id}`})
});

router.put ('/:id', (req,res) => {
    const {id} =req.params.id;
    res.json({message:`this the edit  operation ${id}`})
});


export default router
