import express from 'express';
import { UserValidate } from '../../../validators/user';
import { validateRequest } from '../../../middlewares/validate-request';
import updateUser from '../../../services/updateUser';
import { Token } from '../../../helpers/token_helper';

const router = express.Router();

router.put(
    '/update_user/:id',
    Token.verifyAccessToken,
   updateUser 
);

export default router;