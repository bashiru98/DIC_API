import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';
import { Token } from '../../../helpers/token_helper';
import addTeamMember from '../../../services/team/addTeamMember';

const router = express.Router();

router.post(
    '/add_new_team_member',
    Token.verifyAccessToken,
    TeamValidate.addTeamMember,
    validateRequest,
   addTeamMember
);

export default router;