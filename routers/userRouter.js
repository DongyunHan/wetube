import express from "express";
import routes from "../routes";
import {
  users,
  editProfile,
  userDetail,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
// userRouter.get("/", (req,res) => res.send("user index : Hello~"));
// userRouter.get("/edit", (req,res) => res.send("user edit : What's up?"));
// userRouter.get("/password", (req,res)=> res.send("user pw : I am quiet"));
