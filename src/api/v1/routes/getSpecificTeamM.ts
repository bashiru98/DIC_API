import express from 'express';
import { Token } from '../../../helpers/token_helper';
import { UserValidate } from '../../../validators/user';
import getTeamMember from '../../../services/team/getTeamMember';
import getSpecificTeamMembers from '../../../services/team/getSpecificTeamMembers';

const router = express.Router();

router.get('/get_team_members/:id',Token.verifyAccessToken,UserValidate.getUser,getSpecificTeamMembers);

export default router;
