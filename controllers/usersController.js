const User = require("../models/user");

module.exports.renderSignup = (req,res)=>{
res.render("users/signup");
};

module.exports.signup = async(req,res,next)=>{

const {username,email,password,role} = req.body;

const newUser = new User({username,email,role});

const registeredUser = await User.register(newUser,password);

req.login(registeredUser,(err)=>{
if(err) return next(err);
res.redirect("/home");
});
};

module.exports.renderLogin = (req,res)=>{
res.render("users/login");
};

module.exports.login = (req,res)=>{

let redirectUrl = req.session.redirectUrl || "/home";
delete req.session.redirectUrl;

if(req.user.role === "admin"){
return res.redirect("/admin/dashboard");
}

res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{

req.logout(function(err){
if(err){return next(err);}
res.redirect("/home");
});

};

module.exports.profile = (req,res)=>{
res.render("users/profile",{user:req.user});
};