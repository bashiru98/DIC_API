import { Request, Response } from "express";
import {  User } from '../../models/user';
export = async (req: Request, res: Response) => {

try {
    const user = await User.findById(req.currentUser!.id)

    if(!user) {
        return res.status(400).json({
            errors: [{
              "message": {
                "en": "no profile found",
              },
              "field": "profile"
            }]
          })
    }
   
    res.status(200).json({
      user
      })

} catch (err) {
    console.log(err)
}
};