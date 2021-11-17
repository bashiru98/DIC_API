import { Router } from "express";
export const routes = Router();
import currentUser from "./routes/current_user";
import admin_register from "./routes/admin_register";
import staff_register from "./routes/staff_register";
import admin_signin from "./routes/admin_login";
import staff_signin from "./routes/staff_login";
import update_password from './routes/update_password'
import reset_password from './routes/reset_password'
import forget_password from './routes/forget_password'
import deleteUser from './routes/deleteUser';
import getUsers from './routes/getUsers';
import getProfile from './routes/get_profile'
import updateUser from "./routes/updateUser";
import newTeam from "./routes/newTeam";
import fetchTeams from "./routes/fetchTeams";
import updateTeam from "./routes/updateTeam";
import addNewTeamMember from "./routes/addNewTeamMember";
import fetchTeamMembers from "./routes/fetchTeamMembers";
import updateTeamMember from "./routes/updateTeamMember";
import getOneTeam from "./routes/getOneTeam";
import getOneTeamMember from "./routes/getOneTeamMember";
import getWork from "./routes/getWork";
import updateWork from "./routes/updateWork";
import fetchWorks from "./routes/fetchWorks";
import addWork from "./routes/addWork";
import addWorkers from "./routes/addWorkers";



routes.use("/users", [
    currentUser,admin_signin,
    staff_signin,update_password,
    reset_password,forget_password,
    deleteUser,getUsers,
    getProfile,updateUser,
    admin_register,staff_register,
    newTeam,fetchTeams,
    fetchTeamMembers, updateTeam,
    addNewTeamMember,updateTeamMember,
    getOneTeam,getOneTeamMember,
    getWork, updateWork,
    fetchWorks,addWork,
    addWorkers
]);


