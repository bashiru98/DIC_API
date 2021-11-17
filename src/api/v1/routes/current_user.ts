import express from 'express';
import { Token } from '../../../helpers/token_helper';
import current_user_service from '../../../services/current_user_service';
const router = express.Router();

router.get('/currentuser', Token.verifyAccessToken,current_user_service );

export default router;
