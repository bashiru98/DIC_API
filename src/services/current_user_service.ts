import { Request, Response} from 'express';

export  = (req:Request, res:Response) => {
    res.json({ currentUser: req.currentUser || null });
  }