import express from 'express';
import { Token } from '../../../helpers/token_helper';
import getUsers from '../../../services/getUsers';

const router = express.Router();

router.get('/get_users',Token.verifyAccessToken,getUsers);

export default router;
