var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/BeyondA+')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up",(req,res) => {
    var fullName= req.body.fullName
    var email=req.body.email
    var password=req.body.password
    var role = req.body.role;

    var data={
        "fullName":fullName,
        "email":email,
        "password":password,
        "role": role
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")
        if(role === 'student'){
            res.redirect('student.html');
        }else if(role === 'tutor'){
            res.redirect('tutor.html');
        }else {
            res.redirect('homepage.html'); 
        }
    })
})



var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});

var User = mongoose.model('User', userSchema);

app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;

    User.findOne({ "email": email, "password": password, "role": role }).then(user => {
        if (!user) {
            return res.status(401).send("Invalid email or password");
        }
        if (user.role === 'student') {
            res.redirect('student.html');
        } else if (user.role === 'tutor') {
            res.redirect('tutor.html');
        } else {
            res.redirect('homepage.html');
        }
    }).catch(err => {
        console.error("Error in database operation", err);
        return res.status(500).send("Internal server error");
    });
});



app.get("/",(req,res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("Listening on port 3000")