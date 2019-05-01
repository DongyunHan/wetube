//***********************************************//
// "require" import the module into our project
// from the project. When it is not found
// it will search node_modules.
//***********************************************//
// babel help us to use modern JS.
// like import and const
//***********************************************//
import express from "express";
// const express = require('express');
// morgan for logger
import morgan from "morgan";
// helmet for security
import helmet from "helmet";
// cookie-parser for handling cookie
import cookieParser from "cookie-parser";
// body-parser for handling data on server from user
import bodyParser from "body-parser";
import { builtinModules } from "module";
import { userRouter } from "./router";

const app = express();
const handleMiddleHome = (req, res, next) => {
    console.log("Wow fucking, I am in middle");
    next();
}
const handleHome = (req, res) => res.send("Hello Main: Avengers Assemble from ass");
const handleProfile = (req, res) => res.send("Hello Thanos : Avengers EndGame");
// function handleListening(){
//     console.log(`listening on: http://localhost:${PORT}`);
// }
// function handleHome(req, res){
//     // console.log("hi main");
//     // console.log(req);
//     res.send("Hello Main : spiderman far from home");
// }
// function handleProfile(req, res){
//     res.send("Hello Profile : Avengers EndGame");
// }

//***********************************************//
// app.use make every routing will drop by middleware
// the way how set middleware globally
// app.use(handleMiddleHome);
//***********************************************//
// Remember 
// the codes works in order from top to bottom
//***********************************************//
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("combined"));

// app.get("/", handleMiddleHome, handleHome);
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;