import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';

import { Token } from '../../../helpers/token_helper';
import updateTeam from '../../../services/team/updateTeam';

const router = express.Router();

router.put(
    '/update_team/:id',
    Token.verifyAccessToken,
    TeamValidate.updateTeam,
    validateRequest,
    updateTeam
);

export default router;