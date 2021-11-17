import express from 'express';
import { Token } from '../../../helpers/token_helper';
import { UserValidate } from '../../../validators/user';
import getOneTeam from '../../../services/team/getOneTeam';
import { validateRequest } from '../../../middlewares/validate-request';

const router = express.Router();

router.get('/get_one_team/:id',Token.verifyAccessToken,UserValidate.getUser,
validateRequest,
getOneTeam);

export default router;
