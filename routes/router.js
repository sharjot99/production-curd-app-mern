const express = require('express');
const users = require ('../models/userSchema');
const router = express.Router();

// router.get("/",(req,res) =>{
//     console.log("connect");
// })




// registering  user api
// ==============================
router.post("/register",async(req,res)=>{
    console.log(req.body)
    const{name, email, age, mobile, work, add, desc,listen,read,write,speak,Overall} = req.body;//object destructing
    console.log(req.body)
    //checking required data and sending response from server
    if(!name||!email||!age||!mobile||!work||!add||!desc||!listen||!read||!write||!speak||!Overall)
    {
        res.json("please fill the required fields")
    }

    try{
        //checking the user exists or not.if user exists then we throw an error msg.
        const preuser = await users.findOne({email:email})
        console.log(preuser)
        if (preuser)
        {
            res.status(404).json("This user already exists")
        }
        else
        {
         const adduser = new users({name, email, age, mobile, work, add, desc,listen,read,write,speak,Overall});
         await adduser.save();
         res.status(201).json(adduser)
         console.log(adduser)
        } 
    }catch(error){
        res.status(404).json(error)
    }
})
// fetching user data
router.get("/getdata",async(req,res)=>
{
    try{
        const userdata =await users.find()
        res.status(201).json(userdata)
        console.log(userdata)
    
    

     } catch(error) {
        res.status(404).json(error)
     }
    })
    // fetching  single user data
    router.get("/getuser/:id",async(req,res)=>
    {
        try{
            console.log(req.params)
            const {id} = req.params
            const userindividual =await users.findById({_id:id})
            console.log(userindividual)
            res.status(201).json(userindividual)
        
        
    
         } catch(error) {
            res.status(404).json(error)
         }
        })
        // update user data
        router.patch("/updateuser/:id",async(req,res)=>
        {
            try{
                
                const{id}= req.params
                const updateuser= await users.findByIdAndUpdate(id,req.body,{new:true})
                console.log(updateuser)
                res.status(201).json(updateuser)
 } catch(error){
    res.status(404).json(error)
 }
        })
        // deleting user data api
        // ==========================
        router.delete("/deleteuser/:id",async(req,res)=>
        {
            try{
            //   console.log(req.params)
                const{id}=req.params
                const deleteuser = await users.findByIdAndDelete({_id:id})
                console.log(deleteuser)
                res.status(201).json(deleteuser)

            }catch(error){
                res.status(404).json(error)
            }
        })
    

module.exports = router;