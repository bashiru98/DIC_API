import { Request, Response } from 'express';

import {  User } from '../models/user';

export =  async (req: Request, res: Response) => {
    const { id } = req.params;
   
  const user = await User.findById(id);
  if (!User) {
    return res.status(400).json({
      errors: [{
        "message": {
          "en": "User not found",
        },
      }]
    })
  }

res.status(200).json({user:user})};
