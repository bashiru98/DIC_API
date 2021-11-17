import { Request, Response, NextFunction } from 'express';
import  { Token } from '../helpers/token_helper'


export  = async function (
  req: Request,
  res: Response,
  next: NextFunction
)  {
  
  return await Token.verifyAccessToken
  
};
