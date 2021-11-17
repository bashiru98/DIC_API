const JWT = require('jsonwebtoken')
import { Request, Response, NextFunction } from 'express'
const createError = require('http-errors')
import { NotAuthorizedError } from '../utils/common/errors/not-authorized-error'
import {
  access_token_expiration,
  refresh_token_expiration,
  tokenIssuer,
  accessTokenSecret,
  refreshTokenSecret
}
from '../configs'


interface Data {
  id: string,
  username:string;
  role?: string
}
declare global {
  namespace Express {
    interface Request {
      currentUser?: Data;
    }
  }
}

export class Token {
  static signAccessToken = (data:Data) => {
    return new Promise((resolve, reject) => {
      const options = {
        expiresIn: access_token_expiration,
        issuer: tokenIssuer,
        audience: data.id
      }
      console.log("options",options)
      JWT.sign(data, accessTokenSecret, options, (err:Error, token:string) => {
        if (err) {
          console.log(err)
          reject(createError.InternalServerError())
          return
        }
        console.log("token",token)
        resolve(token)
      })
    })
  }
  static verifyAccessToken = (req:Request, res:Response, next:NextFunction) => {
    if (!req.headers['authorization'])  return res.status(401).json({
      errors: [{
        "message": {
          "en": "No token provided",
        },
        "field": "token"
      }]
    })
    const token = req.headers['authorization']
    JWT.verify(token, accessTokenSecret, (err:Error, payload:Data) => {
      if (err) {
        console.log(err.message)
        return res.status(401).json({
          errors: [{
            "message": {
              "en": "Invalid token",
            },
            "field": `${err.message}`
          }]
        })
      }
      req.currentUser = payload 
      next()
    })
  }
  static signRefreshToken = (data:Data) => {
    return new Promise((resolve, reject) => {
      const options = {
        expiresIn: refresh_token_expiration,
        issuer: tokenIssuer,
        audience: data.id,
      }
      JWT.sign(data, refreshTokenSecret, options, (err:Error, token:string) => {
        if (err) {
          
          // reject(err)
          reject(createError.InternalServerError())
        }

       
          if (err) {
            console.log(err.message)
            reject(createError.InternalServerError())
            return
          }
        
          resolve(token)
      })
    })
  } 
  static verifyRefreshToken = (refreshToken:string) => {
    return new Promise((resolve, reject) => {
      JWT.verify(
        refreshToken,
        refreshTokenSecret,
        (err:Error, payload:Data) => {
          if (err) throw new NotAuthorizedError()
          const userId = payload.id
          // client.GET(userId, (err:Error, result:string) => {
          //   if (err) {
          //     console.log('inside',err)
          //     reject(createError.InternalServerError())
          //   }
          //   if (refreshToken === result) return resolve(userId)
          //   reject(createError.InternalServerError())
          // })
        }
      )
    })
  }

}
  