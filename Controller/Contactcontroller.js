const Contact = require("../Model/Contact")


exports.getContact = async (req,res)=>{
    try {
        const data = await Contact.find()
        return res.json({errors:false,data:data})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postContact = async (req,res)=>{
    try {
        const newContact = new Contact(req.body)
        const data = await newContact.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getContactbyid = async (req,res)=>{
    try {
        const data = await Contact.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putContact = async (req,res)=>{
    try {
        const data = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteContact = async (req,res)=>{
    try {
        const data = await Contact.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

