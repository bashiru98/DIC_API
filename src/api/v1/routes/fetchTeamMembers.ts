import express from 'express';
import { Token } from '../../../helpers/token_helper';
import getTeamMembers from '../../../services/team/getTeamMembers';

const router = express.Router();

router.get('/get_team_members',Token.verifyAccessToken,getTeamMembers);

export default router;
