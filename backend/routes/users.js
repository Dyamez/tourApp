import express from 'express';
import {
    updateUser,
    deleteUser, 
    getUser, 
    getUsers } 
    from '../controllers/UserController.js';
import { verifyToken, verifyUser } from '../utilites/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send('Hello User! You are now logged in!')
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('Hello User! You are now logged in and you can delete your account!')
})

// UPDATE
router.put('/:id', updateUser)

// DELETE
router.delete('/:id', deleteUser)

// GET
router.get('/:id', getUser)

// GET ALL
router.get('/', getUsers)

export default router;