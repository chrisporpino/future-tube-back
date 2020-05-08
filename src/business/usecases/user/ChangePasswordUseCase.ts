import UserDB from "../../../data/UserDataBase";
import User from "../../entities/user";

interface ChangePasswordInput {
    token: string,
    currentPassword: string,
    newPassword: string
}

export default class ChangePasswordUC {
    constructor(private database: UserDB) { }

    async execute(input: ChangePasswordInput) {
        
        const userId = User.getTokenData(input.token).id
        const user = await this.database.getUser(userId)
        const passwordIsCorrect = User.checkPassword(input.currentPassword, user.password)

        if (passwordIsCorrect) {
            const hashPassword = User.encryptPassword(input.newPassword)
            await this.database.updatePassword(userId, hashPassword)
        } else {
            throw new Error("Senha incorreta")
        }

        return{
            message: "Senha alterada com sucesso",
            token: User.generateToken(userId)
        }
    }
}