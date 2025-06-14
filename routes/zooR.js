import express from "express"
import { register ,login,Contact} from "../controllers/Zoo.js";

const router = express.Router();

router.post("/register",register);
router.post("/Slogin",login);
router.post("/contact",Contact)
export default router;