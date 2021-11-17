import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';

import { Token } from '../../../helpers/token_helper';
import updateTeamMember from '../../../services/team/updateTeamMember';


const router = express.Router();

router.put(
    '/update_team_member/:id',
    Token.verifyAccessToken,
    TeamValidate.updateTeam,
    validateRequest,
    updateTeamMember
);

export default router;