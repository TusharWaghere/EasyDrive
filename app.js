const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");


const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");

const ExpressError = require("./utils/ExpressError");

const methodOverride = require("method-override");

/* ROUTES */
const carRoutes = require("./routes/cars");
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/bookings");
const adminRoutes = require("./routes/admin");


/* DATABASE */

mongoose.connect("mongodb://127.0.0.1:27017/cars")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


/* SESSION */

app.use(session({
secret:"mysupersecretcode",
resave:false,
saveUninitialized:false,
cookie:{
httpOnly:true,
maxAge:1000*60*60*24
}
}));


/* PASSPORT */

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* APP CONFIG */

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use((req,res,next)=>{
res.locals.currentUser = req.user;
next();
});

app.use(methodOverride("_method"));


/* ROUTES */

app.use("/",carRoutes);
app.use("/",userRoutes);
app.use("/",bookingRoutes);
app.use("/admin",adminRoutes);


/* ERROR */

app.use((req,res,next)=>{
next(new ExpressError(404,"Page Not Found"));
});

app.use((err,req,res,next)=>{

let {statusCode=500,message="Something went wrong"} = err;

res.status(statusCode).render("error",{statusCode,message});
});


app.listen(3000,()=>{
console.log("Server running on port 3000");
});