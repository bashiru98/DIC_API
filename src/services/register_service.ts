import { Request, Response } from 'express';
import { Token } from '../helpers/token_helper'

import { User } from '../models/user';

interface UserPayload {
  id: string,
  username:string;
  role: string
}

export = async (req: Request, res: Response) => {
    const { username,password,role} = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
     return res.status(400).json({
      errors: [{
        "message": {
          "en": "username already exist",
        },
        "field": "username"
      }]
    })
    }
  try {
 
  const user = User.build({ username, password,role });

    const data:UserPayload = {
    id: user.id,
    username: user.username,
    // @ts-ignore
    role: user.role
    }
    // Generate JWT
  const accessToken = await Token.signAccessToken(data)

  const refreshToken = await Token.signRefreshToken(data) 
 

  await user.save();

  res.status(201).json({ user, accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
  
  }