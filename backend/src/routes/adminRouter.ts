import express from 'express';
import { signIn} from '../controllers/adminController';
import { auth, isAdmin } from '../middlewares/auth.middleware';

const router = express.Router();


// router.post('/signUp', signUp);
router.post('/signIn', signIn);


router.get('/dashboard', auth, isAdmin, (req, res) => {
  return res.json({
    status: 200,
    message: 'Access granted to admin dashboard',
  });
});

export default router;
