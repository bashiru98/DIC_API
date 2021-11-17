import express from 'express';
import { Token } from '../../../helpers/token_helper';
import { UserValidate } from '../../../validators/user';

import getOneWork from '../../../services/work/getOneWork';

const router = express.Router();

router.get('/get_one_work/:id',Token.verifyAccessToken,UserValidate.getUser,getOneWork);

export default router;
