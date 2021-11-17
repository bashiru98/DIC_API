import express from 'express';
import { Token } from '../../../helpers/token_helper';
import { UserValidate } from '../../../validators/user';
import getTeamMember from '../../../services/team/getTeamMember';

const router = express.Router();

router.get('/get_team_member/:id',Token.verifyAccessToken,UserValidate.getUser,getTeamMember);

export default router;
