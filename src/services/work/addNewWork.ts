import { Request, Response } from 'express';
import { Work } from '../../models/work';


export =  async (req: Request, res: Response) => {
    try {
        const {
        name,
        } = req.body;
        
        const existingWork = await Work.findOne({ name });
        
        if (existingWork) {
          return res.status(400).json({
            errors: [{
              "message": {
                "en": "Work already exist",
              },
            }]
          })
        }
      
    let work = Work.build({
        name
    })
 
    await work.save()

    res.status(201).json(work)
    } catch (error) {
        console.log("fatal ", error)
    }
   };
