const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 12;

  const users = [
    {
      firstName: "Super",
      lastName: "Admin",
      email: "admin@recruitment.rw",
      password: await bcrypt.hash("Admin@1234", saltRounds),
      role: "SUPER_ADMIN",
    },
    {
      firstName: "HR",
      lastName: "Manager",
      email: "hr@recruitment.rw",
      password: await bcrypt.hash("Hr@1234", saltRounds),
      role: "HR",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "applicant@recruitment.rw",
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
  console.log("SUPER ADMIN → admin@recruitment.rw      | Admin@1234");
  console.log("HR MANAGER  → hr@recruitment.rw         | Hr@1234");
  console.log("APPLICANT   → applicant@recruitment.rw  | Applicant@1234");
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
