const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
    
});

app.post("/",function(req,res){
    var a=res.statusCode;
    if(a==400){
        res.sendFile(__dirname+"/success.html");
    }
    else{
        res.sendFile(__dirname+"/failure.html");
    }
})
// app.get("/",function (req,res) {
    
// })
app.post("/failure",function (req,res) {
    res.redirect("/");
    
})





app.listen(3000,function(){
    console.log("server has started at port 3000")
})
//api keys
//b55d7873bce4ea3f488a4028c20517ac-us20