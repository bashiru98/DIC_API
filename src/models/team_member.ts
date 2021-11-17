import mongoose, { Schema } from "mongoose";


interface TeamMemberAttrs {
name: string;
phone_number:string;
team:string
bank_account_info:{
bank_account_number: string;
bank_ifsc_code: string;
branch_name:string;
bank_name:string;
}

}

interface TeamMemberDoc extends mongoose.Document {
name: string;
phone_number: string;
team:string;
bank_account_info: {
bank_acount_number: string;
bank_ifsc_code: string;
branch_name:string;
bank_name:string;
}


}

interface TeamMemberModel extends mongoose.Model<TeamMemberDoc> {
  build(attrs: TeamMemberAttrs): TeamMemberDoc;
}

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref:"Team",
    },
  phone_number:{
    type:String,
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

teamMemberSchema.statics.build = (attrs: TeamMemberAttrs) => {
  return new TeamMember(attrs);
};

const TeamMember = mongoose.model<TeamMemberDoc, TeamMemberModel>("Team_Member", teamMemberSchema);

export { TeamMember };
