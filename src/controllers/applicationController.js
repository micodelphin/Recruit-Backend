const prisma = require('../config/db');
const { logAudit } = require('../utils/auditLogger');



/**
 * POST /api/applications
 * Applicant submits their full application with CV
 */
const submitApplication = async (req, res) => {
  try {
    const userId = req.user.id;
    const existing = await prisma.application.findFirst({
      where: { userId },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: `You have already submitted an application ${application.lastName}.`,
        data: {
          applicationId: existing.id,
          status: existing.status,
        },
      });
    }

    const {
      nationalId,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phone,
      address,
      province,
      district,
      schoolName,
      combination,
      yearOfCompletion,
      mathematicsGrade,
      englishGrade,
      physicsGrade,
      chemistryGrade,
      biologyGrade,
    } = req.body;
    const cvFile = req.file;

    const application = await prisma.application.create({
      data: {
        userId,
        nationalId,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        phone,
        address,
        province,
        district,
        schoolName,
        combination,
        yearOfCompletion: yearOfCompletion ? parseInt(yearOfCompletion) : null,
        mathematicsGrade,
        englishGrade,
        physicsGrade,
        chemistryGrade,
        biologyGrade,
        cvFilename: cvFile?.filename || null,
        cvOriginalName: cvFile?.originalname || null,
        cvPath: cvFile?.path || null,
        cvMimeType: cvFile?.mimetype || null,
        status: 'PENDING',
      },
    });

    // After application is created
    await logAudit({
      userId: req.user.id,
      action: 'APPLICATION_SUBMITTED',
      entityType: 'APPLICATION',
      entityId: application.id,
      ipAddress: req.ip,
    });

    return res.status(201).json({
      success: true,
      message: `Application submitted successfully ${application.lastName}. We will review it shortly.`,
      data: {
        id: application.id,
        status: application.status,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error('Submit application error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error submitting application.',
    });
  }
};

/**
 * GET /api/applications/my-application
 * Applicant views their own application and its current status
 */
const getMyApplication = async (req, res) => {
  try {
    const application = await prisma.application.findFirst({
      where: { userId: req.user.id },
      include: {
        reviewer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'You have not submitted an application yet.',
      });
    }

    // Remove cv path from response for security
    const { cvPath, ...applicationData } = application;

    return res.status(200).json({
      success: true,
      data: applicationData,
    });
  } catch (error) {
    console.error('Get my application error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching your application.',
    });
  }
};

/**
 * GET /api/applications
 * HR views the latest 10 applications sorted alphabetically by last name
 */
const getAllApplications = async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      orderBy: [
        { lastName: 'asc' },
        { firstName: 'asc' },
      ],
      select: {
        id: true,
        nationalId: true,
        firstName: true,
        lastName: true,
        gender: true,
        phone: true,
        schoolName: true,
        combination: true,
        status: true,
        createdAt: true,
      },
    });

    // Get total count
    const total = await prisma.application.count();

    return res.status(200).json({
      success: true,
      data: applications,
      meta: {
        total: applications.length,
        note: 'All applications sorted alphabetically',
      },
    });
  } catch (error) {
    console.error('Get all applications error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching applications.',
    });
  }
};

/**
 * GET /api/applications/:id
 * HR views full details of a single application
 */
const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await prisma.application.findUnique({
      where: { id },
      include: {
        reviewer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    // Remove cv path from response for security
    const { cvPath, ...applicationData } = application;

    return res.status(200).json({
      success: true,
      data: applicationData,
    });
  } catch (error) {
    console.error('Get application by ID error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching application.',
    });
  }
};

/**
 * PATCH /api/applications/:id/review
 * HR reviews an application — approve or reject with a reason
 */
const reviewApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reviewComment } = req.body;

    const validStatuses = ['UNDER_REVIEW', 'APPROVED', 'REJECTED'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status must be UNDER_REVIEW, APPROVED or REJECTED.',
      });
    }

    // Reason is required when rejecting
    if (status === 'REJECTED' && !reviewComment?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'A reason is required when rejecting an application.',
      });
    }

    // Check application exists
    const existing = await prisma.application.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    const updated = await prisma.application.update({
      where: { id },
      data: {
        status,
        reviewComment: reviewComment || null,
        reviewedBy: req.user.id,
        reviewedAt: new Date(),
      },
    });


    await logAudit({
      userId: req.user.id,
      action: `APPLICATION_${status}`,
      entityType: 'APPLICATION',
      entityId: id,
      details: { status, reviewComment },
      ipAddress: req.ip,
    });

    return res.status(200).json({
      success: true,
      message: `Application has been ${status.toLowerCase().replace('_', ' ')}.`,
      data: {
        id: updated.id,
        status: updated.status,
        reviewComment: updated.reviewComment,
        reviewedAt: updated.reviewedAt,
      },
    });
  } catch (error) {
    console.error('Review application error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error reviewing application.',
    });
  }
};

const downloadCV = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    if (!application.cvPath) {
      return res.status(404).json({
        success: false,
        message: 'No CV found for this application.',
      });
    }

    res.setHeader('Content-Type', application.cvMimeType || 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${application.cvOriginalName}"`);
    res.sendFile(require('path').resolve(application.cvPath));
  } catch (error) {
    console.error('Download CV error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching CV.',
    });
  }
};

module.exports = {
  submitApplication,
  getMyApplication,
  getAllApplications,
  getApplicationById,
  reviewApplication,
  downloadCV,
};