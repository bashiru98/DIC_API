import express from 'express';
import { Token } from '../../../helpers/token_helper';

import getTeams from '../../../services/team/getTeams';

const router = express.Router();

router.get('/get_teams',Token.verifyAccessToken,getTeams);

export default router;
