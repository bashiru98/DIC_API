
export class Code {
    static generateEmailconfirmationCode() {
        const activateToken = Math.floor(1000 + Math.random() * 9000);
        return activateToken;
    }
    
    static generatePasswordResetCode() {

        return this.generateEmailconfirmationCode()
    }
}