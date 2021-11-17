import { Request, Response } from 'express';
import { Team } from '../../models/team';


export =  async (req: Request, res: Response) => {
    try {
        const { name, location,contact,category,
            bank_account_number,
            bank_ifsc_code,branch_name,
            bank_name } = req.body;
          const team_id = Math.floor(1000 + Math.random() * 9000);
        const team = await Team.findOne({name:name});
        if (team) {
          return res.status(400).json({
            errors: [{
              "message": {
                "en": "team already exists",
              },
            }]
          })
        }
      
    let newTeam = Team.build({name, location,contact,category,team_id,

    bank_account_info:{
        bank_name,
        branch_name,
        bank_ifsc_code,
        bank_account_number
    }
    })
    console.log(newTeam)
    await newTeam.save()

    res.status(201).json(newTeam)
    } catch (error) {
        console.log("fatal", error)
    }
   };
