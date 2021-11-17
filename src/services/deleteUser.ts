import { Request, Response } from "express";
import { User } from '../models/user';
export = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (user) {
          return  res.status(200).send({message:'successfull'});
        }        
        res.status(404).json({
            message:"user not found"
        })
    } catch (error) {
        console.log(error);
    }
};
