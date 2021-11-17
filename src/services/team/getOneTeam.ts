import { Request, Response } from "express";
import { Team } from "../../models/team";


export = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const team = await Team.findById(id);
    if(!team){
        return res.status(400).json({
            errors: [{
              "message": {
                "en": "team not found",
              },
            }]
          })
    }
    res.status(200).json({ team });
  } catch (err) {
    console.log(err);
  }
};
