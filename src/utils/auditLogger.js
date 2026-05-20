const prisma = require('../config/db');

const logAudit = async ({ userId, action, entityType, entityId, details, ipAddress }) => {
  try {
    await prisma.auditLog.create({
      data: {
        userId: userId || null,
        action,
        entityType: entityType || null,
        entityId: entityId || null,
        details: details || null,
        ipAddress: ipAddress || null,
      },
    });
  } catch (error) {
    // Never crash the app if audit logging fails
    console.error('Audit log error:', error.message);
  }
};

module.exports = { logAudit };