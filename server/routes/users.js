import express from 'express';
import {
  getAllUsers,
  getOneUser,
  createUser, 
  loginUser
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
// router.post('/', loginUser);
router.route('/').post(loginUser)


export default router;
