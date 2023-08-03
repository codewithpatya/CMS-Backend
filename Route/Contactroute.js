const {getContact,getContactbyid,postContact,putContact,deleteContact} = require("../Controller/Contactcontroller")

const route = require("express").Router()

route.get("/",getContact)

route.get("/byid/:id",getContactbyid)

route.post("/",postContact)

route.put("/:id",putContact)

route.delete("/:id",deleteContact)


module.exports = route