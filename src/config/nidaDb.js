const { PrismaClient } = require('../generated/nida');

const nidaPrisma = new PrismaClient();
module.exports = nidaPrisma;