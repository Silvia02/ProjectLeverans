import express from 'express';
import {
  getAllUsers,
  getOneUser,
  loginUser,
  createUser
  
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', loginUser);
router.post('/', createUser);
// router.route('/').post(loginUser)


export default router;
