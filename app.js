const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const cors = require("cors")
const app = express()

const ContactRoute = require("./Route/Contactroute")


// middleware
app.use(express.json())
app.use(cors())

// bydefault get
app.get("/", (req,res)=>{
    res.send("This Is La leaven Cafe")
})

// link
app.use("/api/Contactcafe",ContactRoute)

// connection
app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()