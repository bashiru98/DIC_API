import { Request, Response } from "express";

import { TeamMember } from "../../models/team_member";


export = async (req: Request, res: Response) => {
  try {
    
    const teamMembers = await TeamMember.find({}).populate("team");
    
    res.status(200).json({ teamMembers });
  } catch (err) {
    console.log(err);
  }
};
