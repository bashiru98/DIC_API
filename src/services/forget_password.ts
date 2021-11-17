import { Request, Response } from 'express';
import { User } from '../models/user';
import  { Code } from '../utils/generate_code'

export = async (req: Request, res: Response) => {
    try {
      const { username } = req.body

    const user = await User.findOne({ username: username});
  
    if (!user) {
      return res.status(400).json({
        errors: [{
          "message": {
            "en": "'Invalid Credentials'",
          },
          "field": "email"
        }]
      })
    }
     
        // grab code and send to email
    
      const passwordResetCode = Code.generatePasswordResetCode()
      const passwordResetCodeExpire = Date.now() + 10 * 60 * 1000
    
    
      user.resetPasswordCode = JSON.stringify(passwordResetCode)
      user.resetPasswordExpire = passwordResetCodeExpire
    
      // const message = `You are receiving this email because you need to reset your email. Please use the code to reset your password: \n\n ${passwordResetCode}`;
        

    await user.save();
    res.status(200).json({
                "en": "Password reset code sent to email",
                
            })
    } catch (error) {
      console.log(error);
    }
    
  };