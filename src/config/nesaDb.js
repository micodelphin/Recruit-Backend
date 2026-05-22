const { PrismaClient } = require('../generated/nesa');

const nesaPrisma = new PrismaClient();
module.exports = nesaPrisma;