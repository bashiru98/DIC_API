import { Request, Response } from 'express';
import { User } from '../models/user';
  
export = async (req: Request, res: Response)=> {
    
    const { email, password } = req.body
   
    const user = await User.findOne({
      email,
    });
  
    if (!user) {
        return res.status(400).json({
            errors: [{
              "message": {
                "en": "'Invalid Credentials'",
                "tr": "Gercersiz bilgiler"
              },
              "field": "email"
            }]
          })
    }
  
    // Set new password
    user.password = password;

    await user.save();

      res.status(201).json("ok");
  };