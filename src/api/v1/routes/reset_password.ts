import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import reset_password from '../../../services/reset_password';

const router = express.Router();

router.put(
  '/reset_password',
  UserValidate.resetPassword,
  validateRequest,
  reset_password
);

export default router;