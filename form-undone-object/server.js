var users = [{
    name: "ahmer",
    email: "ahmer@gmail.com",
    password: "123",
}]


var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
// const PORT = process.env.PORT || 3000
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())

app.post("/signUpInformation", (req, res, next) => {

    var nEmail = req.body.email
    
    var isFound = false;

    for(i=0; i<users.length; i++){

        if (users[i].email === nEmail){
            isFound = true;
            break;
        }

    }
    
    if (isFound){
        res.send("Email Already Exists")
    }

    else {
        users.push(req.body)
        res.send("Sign Up Success fully")
    }

    console.log(users);

    app.post

    app.post("/login", (req, res, next) =>{
        vEmail = req.body.uemail
        vpassword = req.body.upassword
        isFound = false;
        
        for(i = 0; i< users.length; i++){
            if (users[i].usersEmail === vEmail){

            
            isFound = i;
            break;
        }
    }

    if (isFound === false){
        res.send("user not found");
    }
    else if (users[isfound].userPassword === vpassword){
     res.send("login success" + "Name :" + users[i].userName+ "Email:"+users[i].usersEmail)   
    }
    else{
        res.send("user password invalid")
    }

   

    

        
    })



});
app.listen(3000, function () {
    console.log("server is running");
}
);
