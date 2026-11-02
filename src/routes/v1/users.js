import express from 'express';
import { signUp } from '../../controllers/userController.js';
import { validate } from '../../validators/zodvalidator.js';
import { userSchema } from '../../validators/userschema.js';

const router = express.Router();
router.post('/signup', validate(userSchema), signUp);
export default router;
