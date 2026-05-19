const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 12;

  const users = [
    {
      firstName: "Super",
      lastName: "Admin",
      email: "admin@recruitment.com",
      password: await bcrypt.hash("Admin@1234", saltRounds),
      role: "SUPER_ADMIN",
    },
    {
      firstName: "HR",
      lastName: "Manager",
      email: "hr@recruitment.com",
      password: await bcrypt.hash("Hr@1234", saltRounds),
      role: "HR",
    },
    {
      firstName: "Naomi",
      lastName: "Teta",
      email: "tetaNaomi@recruitment.com",
      password: await bcrypt.hash("Applicant@1234", saltRounds),
      role: "APPLICANT",
    },
  ];

  for (const user of users) {
    const existing = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existing) {
      await prisma.user.create({ data: user });
      console.log(`Created ${user.role}: ${user.email}`);
    } else {
      console.log(`Already exists: ${user.email}`);
    }
  }

  console.log("\n Default Credentials:");
  console.log("─────────────────────────────────────────────────────");
  console.log("SUPER ADMIN → admin@recruitment.com      | Admin@1234");
  console.log("HR MANAGER  → hr@recruitment.com         | Hr@1234");
  console.log("APPLICANT   → NaomiTeta@recruitment.com  | Applicant@1234");
  console.log("─────────────────────────────────────────────────────");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
