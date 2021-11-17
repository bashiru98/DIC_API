import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import login_service from '../../../services/login_service';

const router = express.Router();

router.post(
  '/staff/signin',
  UserValidate.login,
  validateRequest,
  login_service
);

export default router;
