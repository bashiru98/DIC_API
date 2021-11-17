import { Request, Response,NextFunction } from 'express';
import { User } from '../models/user';
import { Password } from '../utils/password';


export = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { currentPassword, newPassword } = req.body
   
      const user = await User.findById(req.currentUser!.id).select('+password');
     
      if (!user) return res.status(400).json({
          errors: [{
            "message": {
              "en": "'Invalid Credentials'",
              "tr": "Gercersiz bilgiler"
            },
            "field": "user"
          }]
      });
      
      // Check current password
  
      if (!await Password.compare(
          user.password,
          currentPassword
      )) {
          return res.status(401).json({
              errors: [{
                "message": {
                  "en": "Incorrect password",
                  "tr": "Gercersiz sifre"
                },
                "field": "password"
              }]
          });
      }
    
      user.password = newPassword;
      await user.save();
    
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
   
};