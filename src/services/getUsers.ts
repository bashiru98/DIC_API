import { Request, Response } from "express";
import { User } from "../models/user";

export = async (req: Request, res: Response) => {
  const query_role = req.query.role;
  try {
    let users;
    if (query_role === undefined) 
        users = await User.find();
    else {
      users = await User.find({ role: `${query_role}` });
    }
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};
