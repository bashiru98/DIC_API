import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import register_service from '../../../services/register_service';
const router = express.Router();

router.post(
    '/admin/register',
    UserValidate.register,
    validateRequest,
    register_service
  );
  
  export default router;
  