const prisma = require("../prisma");

async function getUsers(){
    return prisma.user.findMany();
}

async function getUserById(userId){
    return prisma.user.findUnique({
        where: {
            id: userId,
        }
    })
}
async function createUser(data){
    return prisma.user.create({
        data,
    });
}

async function updateUser(userId, data){
    return prisma.user.update({
        data,
        where: {
            id: userId,
        }
    });
}

async function deleteUser(userId){
    return prisma.user.delete({
        where: {
            id: userId,
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}