import { Request, Response } from "express";
import { Work } from "../../models/work";


export = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const work = await Work.findById(id).populate("workers");
    if(!work){
        return res.status(400).json({
            errors: [{
              "message": {
                "en": "Work not found",
              },
            }]
          })
    }
    res.status(200).json({ work });
  } catch (err) {
    console.log(err);
  }
};
