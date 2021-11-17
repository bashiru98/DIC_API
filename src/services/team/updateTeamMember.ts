import { Request, Response } from "express";

import { TeamMember } from "../../models/team_member";

export = async (req: Request, res: Response) => {
  const id = req.params.id;
  const  input  = req.body;
  const team_member = await TeamMember.findByIdAndUpdate(
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
  if (!team_member) {
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
  res.status(200).json({ team_member });
};
