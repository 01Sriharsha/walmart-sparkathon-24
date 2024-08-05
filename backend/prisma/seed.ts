import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { id: "MANAGER", name: "Manager" },
      { id: "WORKER", name: "Worker" },
      { id: "DRIVER", name: "Driver" },
      { id: "SUPERVISOR", name: "Supervisor" },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
