// "require" import the module into our project
// from the project. When it is not found
// it will search node_modules.
import express from "express";
// const express = require('express');
const app = express();

const PORT = 4000;


const handleListening =() => console.log(`listening on: http://localhost:${PORT}`);
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

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);