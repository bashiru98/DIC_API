import { Request, Response } from "express";
import { Team } from "../../models/team";


export = async (req: Request, res: Response) => {
  try {
    
    const teams = await Team.find();
    
    res.status(200).json({ teams });
  } catch (err) {
    console.log(err);
  }
};
