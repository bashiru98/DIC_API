const {
  DB_URI,
  PORT,
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  TOKEN_ISSUER,
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} = process.env;
export { default as logger } from "./logger";
export const port = PORT || 3000;
export const accessTokenSecret = ACCESS_TOKEN_SECRET_KEY ?? "fafjeofjpowjfkfasfohoa";
export const refreshTokenSecret = REFRESH_TOKEN_SECRET_KEY ?? "foihof28r2holfhoaifoafho";
export const MONGO_URI = DB_URI ?? "mongodb://localhost:27017/DIC_DATABASE";
export const tokenIssuer = TOKEN_ISSUER ?? 'JerinTeam'
export const access_token_expiration = ACCESS_TOKEN_EXPIRATION ?? '1h'
export const refresh_token_expiration = REFRESH_TOKEN_EXPIRATION ?? '1y'
export const prefix = "/dic_2021/api";

