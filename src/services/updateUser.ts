import { Request, Response } from "express";
import { User } from "../models/user";

export = async (req: Request, res: Response) => {
  const id = req.params.id;
  const  {role,image} = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set:{
        role,
        image
      }
    },
    {
      new: true
    }
  );
  if (!user) {
    return res.status(400).json({
      errors: [
        {
          message: {
            en: "update failed",
            tr: "Bir hata oldu",
          },
        },
      ],
    });
  }
  res.status(200).json({ user: user });
};
