import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';
import { Token } from '../../../helpers/token_helper';

import addWorkers from '../../../services/work/addWorkers';

const router = express.Router();

router.post(
    '/add_new_worker_or_workers/:id',
    Token.verifyAccessToken,
    TeamValidate.updateTeam,
    validateRequest,
   addWorkers
);

export default router;