const prisma = require('../config/db');

/**
 * GET /api/dashboard
 * Returns statistics for HR and Super Admin
 */
const getDashboardStats = async (req, res) => {
  try {

    // Total applications count
    const totalApplications = await prisma.application.count();

    const pendingCount = await prisma.application.count({
      where: { status: 'PENDING' },
    });

    const underReviewCount = await prisma.application.count({
      where: { status: 'UNDER_REVIEW' },
    });

    const approvedCount = await prisma.application.count({
      where: { status: 'APPROVED' },
    });

    const rejectedCount = await prisma.application.count({
      where: { status: 'REJECTED' },
    });

    const recentApplications = await prisma.application.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        status: true,
        createdAt: true,
      },
    });

    const maleCount = await prisma.application.count({
      where: { gender: 'Male' },
    });

    const femaleCount = await prisma.application.count({
      where: { gender: 'Female' },
    });

    const stats = {
      applications: {
        total: totalApplications,
        pending: pendingCount,
        underReview: underReviewCount,
        approved: approvedCount,
        rejected: rejectedCount,
      },
      genderBreakdown: {
        male: maleCount,
        female: femaleCount,
      },
      recentApplications,
    };

    // Add user stats for Super Admin only
    if (req.user.role === 'SUPER_ADMIN') {
      const totalUsers = await prisma.user.count();

      const totalApplicants = await prisma.user.count({
        where: { role: 'APPLICANT' },
      });

      const totalHR = await prisma.user.count({
        where: { role: 'HR' },
      });

      const totalSuperAdmins = await prisma.user.count({
        where: { role: 'SUPER_ADMIN' },
      });

      const activeUsers = await prisma.user.count({
        where: { isActive: true },
      });

      const inactiveUsers = await prisma.user.count({
        where: { isActive: false },
      });

      stats.users = {
        total: totalUsers,
        applicants: totalApplicants,
        hrManagers: totalHR,
        superAdmins: totalSuperAdmins,
        active: activeUsers,
        inactive: inactiveUsers,
      };
    }

    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data.',
    });
  }
};

module.exports = { getDashboardStats };