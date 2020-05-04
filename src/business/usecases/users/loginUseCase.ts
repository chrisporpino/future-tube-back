import UserDB from "../../../data/UserDataBase";
import User from "../../entities/user";

interface LoginUCInput {
    email: string,
    password: string
}

export class LoginUC {
    constructor(private dataBase: UserDB) { }

    async execute(input: LoginUCInput) {
        const user = await this.dataBase.getUserByEmail(input.email)
        const token = User.generateToken(user.id)
        const passwordIsCorrect = User.checkPassword(input.password, user.password)

        if (!user) throw new Error("Usuário ou senha incorretos")

        if (!passwordIsCorrect) throw new Error("Usuário ou senha incorretos")

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                photo: user.photo
            }
        }
    }
}