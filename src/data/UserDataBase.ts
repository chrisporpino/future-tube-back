import MainDB from "./MainDatabase";
import User from "../business/entities/user";

export default class UserDB extends MainDB {
    async getUserByEmail(email: string) {
        const result = await this.connection.raw(`
            SELECT * FROM futuretube_USERS
            WHERE email="${email}"
        `)
        return result[0][0]
    }

    async signUp(user: User) {
        try {
            await this.connection.raw(`
        INSERT INTO futuretube_USERS (id, name, email, password, birthdate, photo) values (
            "${user.getId()}",
            "${user.getName()}",
            "${user.getEmail()}",
            "${user.getPassword()}",
            "${user.getbirthDate()}",
            "${user.getPhoto()}"
        );
        `)
        } catch (error) {
            throw new Error(error.sqlMessage)
        }
    }
}