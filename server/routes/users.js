import express from 'express';
import {getAllUsers, getOneUser, createUser} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.post('/', createUser);

export default router;
