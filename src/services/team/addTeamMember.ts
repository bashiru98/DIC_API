import { Request, Response } from 'express';
import { TeamMember } from '../../models/team_member';


export =  async (req: Request, res: Response) => {
    try {
        const { name,team,
          phone_number,
            bank_account_number,
            bank_ifsc_code,branch_name,
            bank_name } = req.body;
        
        const teamMember = await TeamMember.findOne({name:name});
        if (teamMember ) {
          return res.status(400).json({
            errors: [{
              "message": {
                "en": "team member already exists",
              },
            }]
          })
        }
      
    let newTeamMember = TeamMember.build({name,team,
    phone_number,
    bank_account_info:{
        bank_name,
        branch_name,
        bank_ifsc_code,
        bank_account_number
    }
    })
 
    await newTeamMember.save()

    res.status(201).json(newTeamMember)
    } catch (error) {
        console.log("fatal", error)
    }
   };
