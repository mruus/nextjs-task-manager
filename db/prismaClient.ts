
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   const users = await prisma.user.findMany();
//   res.json(users);
// }

// DATABASE_URL="mysql://root:mansuur123@localhost:3306/prisma_taskManager"