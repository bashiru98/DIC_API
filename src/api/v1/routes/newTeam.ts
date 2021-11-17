import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';
import { Token } from '../../../helpers/token_helper';
import addNewTeam from '../../../services/team/addNewTeam';

const router = express.Router();

router.post(
    '/add_new_team',
    Token.verifyAccessToken,
    TeamValidate.addTeam,
    validateRequest,
   addNewTeam
);

export default router;