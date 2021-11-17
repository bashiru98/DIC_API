import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import forget_password from '../../../services/forget_password';

const router = express.Router();

router.post(
  '/forget_password',
  UserValidate.forgetPassword,
  validateRequest,
  forget_password
);

export default router;