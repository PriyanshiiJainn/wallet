import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.create({
    data: {
      phone: "9999999999",
      password: hashedPassword,
    },
  });

  console.log("User created");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
