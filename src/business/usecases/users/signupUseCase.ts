import UserDB from "../../../data/UserDataBase";
import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';
import User from "../../entities/user";

interface SignupInput {
    name: string
    email: string
    password: string
    birthDate: Date
    photo: string
}

export default class SignupUC {
    constructor(private database: UserDB) { }

    async execute(input: SignupInput) {
        const id = v4()
        const hash = User.encryptPassword(input.password)
        const newUser = new User(id, input.name, input.email, hash, input.birthDate, input.photo)
        const token = User.generateToken(newUser.getId())

        await this.database.signUp(newUser)

        return{
            message: "User successfully created",
            token: token
        }
    }
}