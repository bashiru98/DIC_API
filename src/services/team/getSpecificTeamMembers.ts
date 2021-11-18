import { Request, Response } from "express";

import { TeamMember } from "../../models/team_member";


export = async (req: Request, res: Response) => {
  try {
    const team  = req.params.id
    const teamMembers = await TeamMember.find({team:team}).populate("team");
    
    res.status(200).json({ teamMembers });
  } catch (err) {
    console.log(err);
  }
};
