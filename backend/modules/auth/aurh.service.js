import bcrypt from "bcrypt"
import * as authRepository from "./auth.repository"

export const register = async ({ email, password }) => {



    // ontrolar que el usuario exista

    const existingUser = await userRepository.findByEmail(email)


    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    // encriptar password
    const hashedPassword = await bcrypt.hash(password, 8)

    const user = await authRepository.createUser({email, password: hashedPassword}) ;
    return user
}
