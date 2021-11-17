import mongoose from "mongoose";


interface TeamAttrs {
name: string;
location: string;
team_id:number
contact: string;
category: string;
bank_account_info:{
bank_account_number: string;
bank_ifsc_code: string;
branch_name:string;
bank_name:string;
}

}

interface TeamDoc extends mongoose.Document {
name: string;
team_id:number
location: string;
contact: string;
category: string;
bank_account_info: {
bank_acount_number: string;
bank_ifsc_code: string;
branch_name:string;
bank_name:string;
}


}

interface TeamModel extends mongoose.Model<TeamDoc> {
  build(attrs: TeamAttrs): TeamDoc;
}

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    team_id: {
      type: String,
      required: true,
    },

    bank_account_info:{

    bank_account_number: {
        type: String,
        required: true,
        },
        bank_ifsc_code: {
        type: String,
        required: true,
        },
        branch_name: {
        type: String,
        required: true,
        },
        bank_name: {
        type: String,
        required: true,
        },
    },
    
    location: {
      type: String,
      required: true,
    },
   contact: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        enum: ["44", "58"],
        default: "44",
    },
  },

  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

teamSchema.statics.build = (attrs: TeamAttrs) => {
  return new Team(attrs);
};

const Team = mongoose.model<TeamDoc, TeamModel>("Team", teamSchema);

export { Team };
