import express from 'express';
import {
  getAllUsers,
  getOneUser,
  createUser 
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
// router.route('/').post(createUser)


export default router;
