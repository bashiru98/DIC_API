import { Request, Response } from "express";
import { Team } from "../../models/team";
import { TeamMember } from "../../models/team_member";


export = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const team_member  = await TeamMember.findById(id);
    if(!team_member){
        return res.status(400).json({
            errors: [{
              "message": {
                "en": "team member not found",
              },
            }]
          })
    }
    res.status(200).json({ team_member });
  } catch (err) {
    console.log(err);
  }
};
