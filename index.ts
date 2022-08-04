import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    const authors = await prisma.authors.findMany()
    console.log(authors);
} 

main()
.catch(e => {
    console.log(e);
})
.finally(() => {
    prisma.$disconnect()
})