import prisma from '../utils/prismaClient.ts'

export async function createAdmin(walmartID: string, password: string, isAdmin: boolean) {
  return await prisma.admin.create({
    data: {
      walmartID,
      password,
      isAdmin
    }
  });
}

export async function getAdminByWalmartId(walmartID: string) {
  return await prisma.admin.findUnique({
    where: {
      walmartID
    }
  });
}
