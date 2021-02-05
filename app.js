const express=require('express')
const app=express()
const port=5000

let users=[
    {
        name:"John Doe",
        email:"John@gmail.com",
        id:0
    },
    {
        name:"Jane Doe",
        email:"Jane@gmail.com",
        id:1
    }
]

app.use(express.json())

//CRUD= CREATE,READ,UPDATE,DELETE
//      POST,GET,PUT,DELETE

//get all user path:/users method:GET
app.get('/users',(req,res)=>{
    res.send(users)
})

//add a new users path:/add_user method:POST
app.post('/add_user',(req,res)=>{
    console.log(req.body)
    const newUser=req.body
    newUser.id=Math.random()
    users=[...users,newUser]
    res.send({msg:'user added with success',users})
})

//Edit user by id method:put path:user/:id

app.put("/user/:userId",(req,res)=>{
    const id=req.params.userId
    const modification=req.body
    users=users.map(user=>user.id==id?{...user,...modification}:user)
    res.send({msg:'user edited',users})
})


app.delete("/users/:userId",(req,res)=>{
    const id=req.params.userId;
    users=users.filter(user=>user.id.toString()!==id)
    res.send(users)
})




app.listen(port,()=>{
   console.log(`the server is running on port ${port}`)
})