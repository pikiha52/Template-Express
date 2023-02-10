import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const testingTable = prisma.testing_table

export {
    prisma,
    testingTable
}