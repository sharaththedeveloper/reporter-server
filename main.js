const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const port = 3000
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))

app.post("/signin",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'passwrd' in req.body){

        if(req.body.username === null || req.body.username ==="" ||req.body.passwrd === null || req.body.passwrd ==="" ){

          
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            if(req.body.username === "admin" && req.body.passwrd === "admin"){
                res.json({ status : true , msg : "Authenticated" }).end()
            }
            else{
                res.json({ status : false , msg : "Invalid Request" }).end()
            }
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.post("/signup",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'passwrd' in req.body){

        if(req.body.username === null || req.body.username ==="" ||req.body.passwrd === null || req.body.passwrd ==="" ){
            
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            if(req.body.username !== 'admin'){
                res.json({ status : true , msg : "New User added" }).end()
            }
            else{
                res.json({ status : true , msg : "User Already Present" }).end()
            }
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.post("/fetchUserResources",(req,res)=>{
    console.log(req.body);
    if('username' in req.body){

        if(req.body.username === null || req.body.username ===""){
          
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            res.json({ status : true , msg : { 
                projects :["project1"],
                teams :["my team"],
                people:["john doe"]
            } }).end()
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.post("/addNewProject",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'projectname' in req.body && 'duration' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.projectname === null || req.body.projectname ==="" || req.body.duration === null || req.body.duration ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            if(req.body.projectname !== "myproject"){
                res.json({ status : true , msg : "Project Created" }).end()
            }
            else{
                res.json({ status : true , msg : "Project Already Exists" }).end()
            }
            
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})
app.post("/addNewTeam",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'teamname' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.teamname === null || req.body.teamname ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            if(req.body.projectname !== "adminteam"){
                res.json({ status : true , msg : "Team Created" }).end()
            }
            else{
                res.json({ status : true , msg : "Team Already Exists" }).end()
            }
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.post("/invitePeople",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'personemail' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.personemail === null || req.body.personemail ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            
            if(req.body.projectname !== "adminteam"){
                res.json({ status : true , msg : "Attempting to add" }).end()
            }
            else{
                res.json({ status : true , msg : "Already in your Contacts" }).end()
            }
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.delete("/removePerson",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'personemail' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.personemail === null || req.body.personemail ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            res.json({ status : true , msg : "User Removed" }).end()
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})
app.delete("/removeTeam",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'teamname' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.teamname === null || req.body.teamname ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            res.json({ status : true , msg : "Team Removed" }).end()
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})
app.delete("/removeProject",(req,res)=>{
    console.log(req.body);
    if('username' in req.body && 'projectname' in req.body){

        if(req.body.username === null || req.body.username ==="" || req.body.projectname === null || req.body.projectname ===""){
           
            res.json({ status : false , msg : "Invalid Request" }).end()
        }

        else{
            res.json({ status : true , msg : "Project Removed" }).end()
        }

    }

    else{
        res.json({ status : false , msg : "Invalid Request" }).end()
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))