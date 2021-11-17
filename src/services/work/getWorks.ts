import { Request, Response } from "express";
import { Work } from "../../models/work";


export = async (req: Request, res: Response) => {
  try {
    
    const works = await Work.find({}).populate("workers");
    
    res.status(200).json({ works });
  } catch (err) {
    console.log(err);
  }
};
