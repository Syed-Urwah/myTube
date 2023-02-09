import express from 'express';
import { login, signup } from '../controllers/auths.js';
const router = express.Router();

//signup
router.post("/signup", signup)

//login
router.get("/login", login)

//Google Auth

export default router