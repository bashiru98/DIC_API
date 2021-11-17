import { body , param} from 'express-validator';
import mongoose  from 'mongoose';
export class UserValidate {
    static register = [
        body('username').trim()
            .notEmpty()
            .withMessage({ en: 'username is required' }),
    
        body('password')
            .trim()
            .notEmpty()
            .withMessage({ en: 'Password is required' }),
        body('role')
            .trim()
            .notEmpty()
            .withMessage({ en: 'role is required' }),
    ]
    
    static login = [
        body('username').trim()
            .notEmpty()
            .withMessage({ en: 'username is required' })
            .trim()
            .notEmpty()
            .withMessage({ en: 'Password is required' }),
    ]
    static updatePassword = [
        body('currentPassword').trim()
            .notEmpty()
            .withMessage({ en: 'current password is required'}),
        body('newPassword').notEmpty().withMessage({ en: 'new password is required' }),
        
    ]
    static refreshToken = [
        body('refreshToken').trim()
            .notEmpty()
            .withMessage({ en: 'Refresh token is required'}),
    ]
    static deviceToken = [
        body('deviceToken').trim()
            .notEmpty()
            .withMessage({ en: 'device token is required' }),
    ]
    static code = [
        body('code').trim()
            .notEmpty()
            .withMessage({ en: 'Verification code is required' }),
    ]
    static resetPassword = [
        body('username').trim()
            .notEmpty()
            .withMessage({ en: 'username is required' }),
        body('password').trim()
            .notEmpty()
            .withMessage({ en: 'Password is required' }),
    ]
    static forgetPassword = [
        body('username').trim()
            .notEmpty()
            .withMessage({ en: 'username is required'}),
    ]
    static checkToken = [
        body('resetCode').trim()
            .notEmpty()
            .withMessage({ en: 'Reset code  is required'}),
    ]
    static getUser = [
        param('id')
        .not()
        .isEmpty()
        .custom((input:string)=>{mongoose.Types.ObjectId.isValid(input)})
        .withMessage({en:'User id is required'}),
    ]
    
}

