import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import update_password from '../../../services/update_password';
import { Token } from '../../../helpers/token_helper';

const router = express.Router();

router.put(
    '/update_password',
   Token.verifyAccessToken,
   UserValidate.updatePassword,
   validateRequest,
   update_password 
);

export default router;
