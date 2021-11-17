import { Request, Response } from "express";
import { Team } from "../../models/team";


export = async (req: Request, res: Response) => {
  const id = req.params.id;
  const  input  = req.body;
  const team = await Team.findByIdAndUpdate(
    id,
    {
      $set:{
     ...input
      }
    },
    {
      new: true
    }
  );
  if (!team) {
    return res.status(400).json({
      errors: [
        {
          message: {
            en: "update failed",
          },
        },
      ],
    });
  }
  res.status(200).json({ team });
};
