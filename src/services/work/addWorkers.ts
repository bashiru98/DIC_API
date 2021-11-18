import { Request, Response } from 'express';
import { Work } from '../../models/work';


export =  async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
    
       const input =  req.body;
        
        if(!input || input.length <= 0) {
            return res.status(400).json({
                errors: [{
                  "message": {
                    "en": "Workers cant be empty",
                  },
                }]
              })
        }
        const existingWork = await Work.findById(id);
        
        if (!existingWork) {
          return res.status(400).json({
            errors: [{
              "message": {
                "en": "Work does not exist",
              },
            }]
          })
        }

        const work = await Work.findByIdAndUpdate(
            id,
            {
              $addToSet:{
               ...input
              }
            },
            {
              new: true
            }
          );

    res.status(201).json(work)
    } catch (error) {
        console.log("fatal ", error)
    }
   };
