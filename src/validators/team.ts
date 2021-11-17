import { body, param} from 'express-validator';
export class TeamValidate {
    static addTeam = [
        body('name').trim()
            .notEmpty()
            .withMessage({ en: 'team name is required' }),
    
        body('category')
            .trim()
            .notEmpty()
            .withMessage({ en: 'team category is required' }),
        body('contact')
            .trim()
            .notEmpty()
            .withMessage({ en: 'team contact is required' }),
        body('location')
            .trim()
            .notEmpty()
            .withMessage({ en: 'team location is required' }),
        body('bank_account_number')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank-account_number is required' }),
        body('bank_ifsc_code')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank_ifsc_code is required' }),
        body('branch_name')
            .trim()
            .notEmpty()
            .withMessage({ en: 'branch_name is required' }),
        body('bank_name')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank_name is required' }),
    ]
    
    static addTeamMember = [
        body('name').trim()
            .notEmpty()
            .withMessage({ en: 'member name is required' }),
    
        body('team')
            .exists()
            .isMongoId()
            .withMessage({ en: 'team id is required' }),
            
        body('bank_account_number')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank-account_number is required' }),
        body('bank_ifsc_code')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank_ifsc_code is required' }),
        body('branch_name')
            .trim()
            .notEmpty()
            .withMessage({ en: 'branch_name is required' }),
        body('bank_name')
            .trim()
            .notEmpty()
            .withMessage({ en: 'bank_name is required' }),
    ]
    
    static updateTeam = [
        param('id')
        .exists()
        .isMongoId()
        .withMessage({ en: 'team id is required or must be valid' }),
    ]
   
    
}

function isMongoId() {
    throw new Error('Function not implemented.');
}

