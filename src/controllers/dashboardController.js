const prisma = require('../config/db');

const getDashboardStats = async (req, res) => {
  try {
    const role = req.user.role;

    // ── HR stats only ──────────────────────────────────────────
    if (role === 'HR') {
      const totalApplications = await prisma.application.count();
      const pendingCount      = await prisma.application.count({ where: { status: 'PENDING' } });
      const underReviewCount  = await prisma.application.count({ where: { status: 'UNDER_REVIEW' } });
      const approvedCount     = await prisma.application.count({ where: { status: 'APPROVED' } });
      const rejectedCount     = await prisma.application.count({ where: { status: 'REJECTED' } });
      const maleCount         = await prisma.application.count({ where: { gender: 'Male' } });
      const femaleCount       = await prisma.application.count({ where: { gender: 'Female' } });

      const recentApplications = await prisma.application.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { id: true, firstName: true, lastName: true, status: true, createdAt: true, photoUrl: true,},
      });

      return res.status(200).json({
        success: true,
        data: {
          applications: {
            total: totalApplications,
            pending: pendingCount,
            underReview: underReviewCount,
            approved: approvedCount,
            rejected: rejectedCount,
          },
          genderBreakdown: { male: maleCount, female: femaleCount },
          recentApplications,
        },
      });
    }

    // ── SUPER_ADMIN stats only ─────────────────────────────────
    if (role === 'SUPER_ADMIN') {
      const totalUsers      = await prisma.user.count();
      const totalApplicants = await prisma.user.count({ where: { role: 'APPLICANT' } });
      const totalHR         = await prisma.user.count({ where: { role: 'HR' } });
      const totalSuperAdmins= await prisma.user.count({ where: { role: 'SUPER_ADMIN' } });
      const activeUsers     = await prisma.user.count({ where: { isActive: true } });
      const inactiveUsers   = await prisma.user.count({ where: { isActive: false } });

      const recentUsers = await prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { id: true, firstName: true, lastName: true, email: true, role: true, isActive: true, createdAt: true },
      });

      const recentAuditLogs = await prisma.auditLog.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { firstName: true, lastName: true } },
        },
      });

      // Users registered per month (last 6 months)
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
      sixMonthsAgo.setDate(1);
      sixMonthsAgo.setHours(0, 0, 0, 0);

      const usersOverTime = await prisma.user.findMany({
        where: { createdAt: { gte: sixMonthsAgo } },
        select: { createdAt: true },
      });

      // Group by month
      const monthMap = {};
      usersOverTime.forEach((u) => {
        const key = new Date(u.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
        monthMap[key] = (monthMap[key] || 0) + 1;
      });
      const registrationsOverTime = Object.entries(monthMap).map(([month, count]) => ({ month, count }));

      return res.status(200).json({
        success: true,
        data: {
          users: {
            total: totalUsers,
            applicants: totalApplicants,
            hrManagers: totalHR,
            superAdmins: totalSuperAdmins,
            active: activeUsers,
            inactive: inactiveUsers,
          },
          recentUsers,
          recentAuditLogs,
          registrationsOverTime,
        },
      });
    }

    return res.status(403).json({ success: false, message: 'Access denied.' });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return res.status(500).json({ success: false, message: 'Error fetching dashboard data.' });
  }
};

module.exports = { getDashboardStats };