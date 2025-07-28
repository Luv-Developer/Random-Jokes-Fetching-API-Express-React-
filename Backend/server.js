const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const connection = require("./config/connection")
const usermodel = require("./models/user")


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.post("/register",async(req,res)=>{
    const {username,email,password} = req.body
    await bcrypt.genSalt(10,async(err,salt)=>{
        await bcrypt.hash(password,salt,async(err,hash)=>{
            let user = await usermodel.create({
                username:username,
                email:email,
                password:hash
            })
            res.redirect("/login")
        })
    })
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    let user = await usermodel.findOne({email})
    if(!user){
        res.redirect("/register")
    }
    else{
        await bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                let token = jwt.sign({email},"hehe")
                res.cookie("token",token)
                res.redirect("/profile")
            }
            else{
                res.redirect("/login")
            }
        })
    }
})
app.get("/logout",(req,res)=>{
    res.cookie("token","")
    res.redirect("/login")
})
//Protected Route 
function isloggedin(req,res,next){
    if(req.cookies.token===""){
        res.redirect("/login")
    }
    else{
        let data = jwt.verify(req.cookies.token,"hehe")
        req.user = data
    }
    next()
}
app.get("/profile",isloggedin,async(req,res)=>{
    let user = await usermodel.findOne({email:req.user.email})
    console.log(user)
    res.render("profile",{user})
})

app.listen(port,()=>{
    console.log(`App is listening at ${port}`)
})