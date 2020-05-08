import MainDB from "./MainDatabase";
import User from "../business/entities/user";

export default class UserDB extends MainDB {
    private usersTableName = 'futuretube_USERS';

    async signUp(user: User) {
        try {
            await this.connection.raw(`
            INSERT INTO ${this.usersTableName} (id, name, email, password, birthdate, photo)
            VALUES (
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getPassword()}",
                "${user.getbirthDate()}",
                "${user.getPhoto()}"
            );
        `)
        } catch (err) {
            throw new Error(err.sqlMessage)
        }
    }

    async getUser(idOrEmail: string) {
        try {
            const query = await this.connection.raw(`
                SELECT *
                FROM ${this.usersTableName}
                WHERE id = "${idOrEmail}"
                OR email = "${idOrEmail}"
            `)
            return query[0][0]
        } catch(err) {
            throw new Error(err.sqlMessage)
        }
    }

    async updatePassword(userId: string, newPassword: string) {

        try {
            await this.connection.raw(`
            UPDATE ${this.usersTableName}
            SET password = "${newPassword}"
            WHERE id = "${userId}"
            `)
        } catch (err) {
            throw new Error(err.sqlMessage)
        }
    }
}