import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/UserController.js";
import {
  verifyToken,
  verifyUser,
  verifyAdmin,
} from "../utilities/verifyToken.js";

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('Hello User! You are now logged in!')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello user, You are now logged in and you can delete your account!')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello admin, you are now logged in and you can delete all accounts!')
// })

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
