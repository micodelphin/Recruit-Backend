const axios = require('axios');

const NIDA_SERVICE_URL = process.env.NIDA_SERVICE_URL || 'http://localhost:8001';
const NESA_SERVICE_URL = process.env.NESA_SERVICE_URL || 'http://localhost:8002';

/**
 * GET /api/nida/:nationalId
 * Calls NIDA service to fetch profile
 */
const getNIDAProfile = async (req, res) => {
  try {
    const { nationalId } = req.params;

    const response = await axios.get(`${NIDA_SERVICE_URL}/api/nida/${nationalId}`);

    const profile = response.data.data;

    // Security check — verify email matches logged in user
    if (profile.email !== req.user.email) {
      return res.status(403).json({
        success: false,
        message: 'This National ID does not match your account.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'NIDA profile fetched successfully.',
      data: profile,
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: 'No NIDA profile found for this National ID.',
      });
    }
    console.error('NIDA service error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Error connecting to NIDA service.',
    });
  }
};

/**
 * GET /api/nesa/:studentId
 * Calls NESA service to fetch academic record
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

    // Verify National ID belongs to logged in user via NIDA service
    try {
      const nidaResponse = await axios.get(`${NIDA_SERVICE_URL}/api/nida/${nationalId}`);
      const nidaProfile = nidaResponse.data.data;

      if (nidaProfile.email !== req.user.email) {
        return res.status(403).json({
          success: false,
          message: 'This National ID does not match your account.',
        });
      }
    } catch (nidaError) {
      return res.status(404).json({
        success: false,
        message: 'No NIDA profile found for this National ID.',
      });
    }

    // Fetch NESA record
    const response = await axios.get(
      `${NESA_SERVICE_URL}/api/nesa/${studentId}?nationalId=${nationalId}`
    );

    return res.status(200).json({
      success: true,
      message: 'Academic record fetched successfully.',
      data: response.data.data,
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: 'No academic record found. Please check your Student ID and National ID.',
      });
    }
    console.error('NESA service error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Error connecting to NESA service.',
    });
  }
};

/**
 * POST /api/nida
 * Calls NIDA service to create a profile
 */
const createNIDAProfile = async (req, res) => {
  try {
    const response = await axios.post(`${NIDA_SERVICE_URL}/api/nida`, req.body);

    return res.status(201).json({
      success: true,
      message: 'NIDA profile created successfully.',
      data: response.data.data,
    });
  } catch (error) {
    if (error.response?.status === 409) {
      return res.status(409).json({
        success: false,
        message: 'A NIDA profile with this National ID already exists.',
      });
    }
    console.error('Create NIDA error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Error connecting to NIDA service.',
    });
  }
};

/**
 * POST /api/nesa
 * Calls NESA service to create a record
 */
const createNESARecord = async (req, res) => {
  try {
    const response = await axios.post(`${NESA_SERVICE_URL}/api/nesa`, req.body);

    return res.status(201).json({
      success: true,
      message: 'NESA record created successfully.',
      data: response.data.data,
    });
  } catch (error) {
    if (error.response?.status === 409) {
      return res.status(409).json({
        success: false,
        message: error.response.data.message,
      });
    }
    console.error('Create NESA error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Error connecting to NESA service.',
    });
  }
};

module.exports = {
  getNIDAProfile,
  getNESARecord,
  createNIDAProfile,
  createNESARecord,
};