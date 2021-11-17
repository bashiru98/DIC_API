import mongoose from "mongoose";
import { Password } from "../utils/password";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  username: string;
  password: string;
  twoFactorCode?: string;
  twoFactorCodeExpire?: number;
  twoFactorEnable?: boolean;
  resetPasswordCode?: string;
  isEmailConfirmed?: boolean;
  resetPasswordExpire?: Date;
  confirmEmailCodeExpire?: number;
  confirmEmailCode?: string;
  role?: string;
 
  profile?: {
    name: string;

    birthDate: string;

    gender: string;

  };

}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  username: string;
  password: string;
  role?: string;
  twoFactorCode?: string;
  twoFactorCodeExpire?: Date;
  twoFactorEnable?: boolean;
  resetPasswordCode?: string;
  resetPasswordExpire?: number;
  confirmEmailCode?: string;
  isEmailConfirmed?: boolean;
  confirmEmailCodeExpire?: number;
  profile?: {
    name: string;

    birthDate: string;

    gender: string;

  };
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    twoFactorCode: String,

    resetPasswordCode: String,

    resetPasswordExpire: Number,

    confirmEmailCode: String,

    confirmEmailCodeExpire: Number,
    isEmailConfirmed: {
      type: Boolean,
      default: false,
    },
    twoFactorCodeExpire: Date,

    twoFactorEnable: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["staff", "admin"],
      default: "admin",
    },
    profile: {
      name: String,

      birthDate: String,

      gender: String,
    },
    password: {
      type: String,
      required: true,
    },
  
    hasProfile: {
      type: Boolean,
      default: false,
    },
  },

  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
