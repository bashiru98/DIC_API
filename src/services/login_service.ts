import { Request, Response } from 'express';
import { Token } from '../helpers/token_helper'
import { User } from '../models/user';
import { Password } from '../utils/password';

interface UserPayload {
  id: string,
  username: string;
  role: string
}

export =  async (req: Request, res: Response) => {
  try {

    
    const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res.status(400).json({
      errors: [{
        "message": {
          "en": "'Invalid Credentials'",
        },
        "field": "password"
      }]
    })
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );
  if (!passwordsMatch) {
    return res.status(400).json({
      errors: [{
        "message": {
          "en": "'Invalid Credentials'",
        },
        "field": "password"
      }]
    });
  }

  const data: UserPayload = {
    id: existingUser.id,
    username: existingUser.username,
    // @ts-ignore
    role: existingUser?.role
  }
     // @ts-ignore
  if(!req.path.includes(existingUser!.role) ){
    return res.status(400).json({
      errors: [{
        "message": {
          "en": "access denied",
        },
        "field": "role"
      }]
    })
  }
  // Generate JWT

  const accessToken = await Token.signAccessToken(data)

  const refreshToken = await Token.signRefreshToken(data)

  //@ts-ignore
  res.status(200).json({ user: existingUser, accessToken, refreshToken });

  } catch (error) {
    console.log(error);
  }
  

}