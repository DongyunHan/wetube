import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req,res) => res.send("user index : Hello~"));
userRouter.get("/edit", (req,res) => res.send("user edit : What's up?"));
userRouter.get("/password", (req,res)=> res.send("user pw : I am quiet"));
