import { Prisma, User } from "@prisma/client";
import prisma from "../libs/prisma";

async function createUser(data: Prisma.UserCreateInput): Promise<User> {
  return await prisma.user.create({
    data,
    select: {
      id: true,
      createdAt: true,
      name: true,
      email: true,
      password: true,
      address: true,
    },
  });
}

export default createUser;
