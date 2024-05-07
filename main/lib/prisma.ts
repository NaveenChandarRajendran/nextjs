import { PrismaClient } from "@prisma/client";

const globalForPrisma:any = global

export const  prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"] })