import express from 'express';
import { Token } from '../../../helpers/token_helper';
import getProfile from '../../../services/profile/getProfile';

const router = express.Router();

router.get('/profile',Token.verifyAccessToken,getProfile);

export default router;