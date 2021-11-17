import express from 'express';
import { Token } from '../../../helpers/token_helper';
import { UserValidate } from '../../../validators/user';

import getUser from '../../../services/getUser';

const router = express.Router();

router.get('/get_user/:id',Token.verifyAccessToken,UserValidate.getUser,getUser);

export default router;
