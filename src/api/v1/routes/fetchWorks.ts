import express from 'express';
import { Token } from '../../../helpers/token_helper';

import getWorks from '../../../services/work/getWorks';

const router = express.Router();

router.get('/get_works',Token.verifyAccessToken,getWorks);

export default router;
