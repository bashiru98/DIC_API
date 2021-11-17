import { Request, Response } from "express";
import { Work } from "../../models/work";


export = async (req: Request, res: Response) => {
  const id = req.params.id;
  const  input  = req.body;
  const work = await Work.findByIdAndUpdate(
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
  if (!work) {
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
  res.status(200).json({ work });
};
