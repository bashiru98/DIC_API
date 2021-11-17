import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';

import { Token } from '../../../helpers/token_helper';
import updateWork from '../../../services/work/updateWork';

const router = express.Router();

router.put(
    '/update_work/:id',
    Token.verifyAccessToken,
    TeamValidate.updateTeam,
    validateRequest,
    updateWork
);

export default router;