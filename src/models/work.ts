import mongoose, { Schema } from "mongoose";


interface WorkAttrs {
name: string;
workers?: string[];

}

interface WorkDoc extends mongoose.Document {
name: string;
workers: string[];

}

interface WorkModel extends mongoose.Model<WorkDoc> {
  build(attrs: WorkAttrs): WorkDoc;
}

const workSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    workers_44: [{
      type: Schema.Types.ObjectId,
      ref:"Team_Member",
      default:[]
    }],
    
    workers_58: [{
      type: Schema.Types.ObjectId,
      ref:"Team_Member",
      default:[]
    }],
  
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

workSchema.statics.build = (attrs: WorkAttrs) => {
  return new Work(attrs);
};

const Work = mongoose.model<WorkDoc, WorkModel>("Work", workSchema);

export { Work };
