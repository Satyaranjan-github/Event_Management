import { Router } from "express";
import { createUser } from "../controller/user.controller";

const route = Router();

route.post("/create", createUser);

export default route;
