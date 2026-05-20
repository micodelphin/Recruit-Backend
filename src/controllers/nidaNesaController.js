const prisma = require('../config/db');

/**
 * GET /api/nida/:nationalId
 * Fetch personal info from NIDA table
 */
const getNIDAProfile = async (req, res) => {
  try {
    const { nationalId } = req.params;

    const profile = await prisma.nidaProfile.findUnique({
      where: { nationalId },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'No NIDA profile found for this National ID.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'NIDA profile fetched successfully.',
      data: profile,
    });
  } catch (error) {
    console.error('Get NIDA profile error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching NIDA profile.',
    });
  }
};

/**
 * GET /api/nesa/:studentId
 * Fetch academic info from NESA table
 * Requires both studentId and nationalId to match
 */
const getNESARecord = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { nationalId } = req.query;

    if (!nationalId) {
      return res.status(400).json({
        success: false,
        message: 'National ID is required.',
      });
    }

    // Find NESA record where both studentId and nationalId match
    const record = await prisma.nesaRecord.findFirst({
      where: {
        studentId,
        nationalId,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'No academic record found. Please check your Student ID and National ID.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Academic record fetched successfully.',
      data: record,
    });
  } catch (error) {
    console.error('Get NESA record error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching academic record.',
    });
  }
};

/**
 * POST /api/nida
 * Add a new NIDA profile — Super Admin only
 */
const createNIDAProfile = async (req, res) => {
  try {
    const {
      nationalId,
      fullName,
      gender,
      dob,
      placeOfBirth,
      nationality,
      fatherName,
      motherName,
      address,
      province,
      district,
    } = req.body;

    // Check if nationalId already exists
    const existing = await prisma.nidaProfile.findUnique({
      where: { nationalId },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'A NIDA profile with this National ID already exists.',
      });
    }

    const profile = await prisma.nidaProfile.create({
      data: {
        nationalId,
        fullName,
        gender,
        dob: new Date(dob),
        placeOfBirth,
        nationality,
        fatherName,
        motherName,
        address,
        province,
        district,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'NIDA profile created successfully.',
      data: profile,
    });
  } catch (error) {
    console.error('Create NIDA profile error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating NIDA profile.',
    });
  }
};

/**
 * POST /api/nesa
 * Add a new NESA record — Super Admin only
 */
const createNESARecord = async (req, res) => {
  try {
    const {
      studentId,
      nationalId,
      fullName,
      school,
      option,
      yearCompleted,
      grades,
    } = req.body;

    // Check if NIDA profile exists for this nationalId
    const nidaProfile = await prisma.nidaProfile.findUnique({
      where: { nationalId },
    });

    if (!nidaProfile) {
      return res.status(404).json({
        success: false,
        message: 'No NIDA profile found for this National ID. Create NIDA profile first.',
      });
    }

    // Check if studentId already exists
    const existingStudent = await prisma.nesaRecord.findUnique({
      where: { studentId },
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: 'A NESA record with this Student ID already exists.',
      });
    }

    // Check if nationalId already has a NESA record
    const existingNational = await prisma.nesaRecord.findUnique({
      where: { nationalId },
    });

    if (existingNational) {
      return res.status(409).json({
        success: false,
        message: 'A NESA record for this National ID already exists.',
      });
    }

    const record = await prisma.nesaRecord.create({
      data: {
        studentId,
        nationalId,
        fullName,
        school,
        option,
        yearCompleted: parseInt(yearCompleted),
        grades,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'NESA record created successfully.',
      data: record,
    });
  } catch (error) {
    console.error('Create NESA record error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating NESA record.',
    });
  }
};

module.exports = {
  getNIDAProfile,
  getNESARecord,
  createNIDAProfile,
  createNESARecord,
};