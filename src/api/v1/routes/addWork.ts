import express from 'express';
import { TeamValidate } from '../../../validators/team';
import { validateRequest } from '../../../middlewares/validate-request';
import { Token } from '../../../helpers/token_helper';

import addNewWork from '../../../services/work/addNewWork';

const router = express.Router();

router.post(
    '/add_new_work',
    Token.verifyAccessToken,
    TeamValidate.addWork,
    validateRequest,
   addNewWork
);

export default router;