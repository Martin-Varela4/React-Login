import prisma from ""

export const findByEmail = async (email) => {
    return await  prisma.usuarios.findUnique({ where: {email}})
}


export const createUser = async (userData) => {
    return await  prisma.usuarios.create({data: userData})
}