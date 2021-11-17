import express from 'express';
import deleteUser from '../../../services/deleteUser';

const router = express.Router();

router.delete('/delete_user/:id',deleteUser);

export default router;
