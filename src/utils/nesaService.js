// /**
//  * NESA Service (Simulated)
//  * When the real NESA API is provided, replace the logic
//  * inside fetchNESARecords with a real axios call.
//  * The controller will not need any changes.
//  */

// const simulatedData = {
//   '1199880012345678': {
//     nationalId: '1199880012345678',
//     schoolName: 'Lycée de Kigali',
//     combination: 'PCB (Physics, Chemistry, Biology)',
//     yearOfCompletion: 2016,
//     mathematicsGrade: 'B2',
//     englishGrade: 'A',
//     physicsGrade: 'B1',
//     chemistryGrade: 'B2',
//     biologyGrade: 'A',
//   },
//   '2222222222222222': {
//     nationalId: '2222222222222222',
//     schoolName: 'École des Sciences de Byimana',
//     combination: 'MCB (Mathematics, Chemistry, Biology)',
//     yearOfCompletion: 2022,
//     mathematicsGrade: 'A',
//     englishGrade: 'B1',
//     physicsGrade: 'B1',
//     chemistryGrade: 'B3',
//     biologyGrade: 'C',
//   },
//   '1111111111111111': {
//     nationalId: '1111111111111111',
//     schoolName: 'Saint André College',
//     combination: 'MPC (Mathematics, Physics, chemistry)',
//     yearOfCompletion: 2015,
//     mathematicsGrade: 'B3',
//     englishGrade: 'A',
//     physicsGrade: 'C',
//     chemistryGrade: 'C',
//     biologyGrade: 'B3',
//   },
// };

// const fetchNESARecords = async (nationalId) => {
//   // Simulate network delay
//   await new Promise((resolve) => setTimeout(resolve, 600));

//   // Validate ID format — must be 16 digits
//   if (!nationalId || !/^\d{16}$/.test(nationalId)) {
//     return {
//       success: false,
//       message: 'Invalid National ID. Must be exactly 16 digits.',
//     };
//   }

//   const records = simulatedData[nationalId];

//   // If ID is not in our simulated data
//   // generate generic records for demo purposes
//   if (!records) {
//     return {
//       success: true,
//       data: {
//         nationalId,
//         schoolName: 'Demo Secondary School',
//         combination: 'PCM (Physics, Chemistry, Mathematics)',
//         yearOfCompletion: 2020,
//         mathematicsGrade: 'B2',
//         englishGrade: 'B1',
//         physicsGrade: 'B2',
//         chemistryGrade: 'B3',
//         biologyGrade: 'C',
//       },
//     };
//   }

//   return {
//     success: true,
//     data: records,
//   };
// };

// module.exports = { fetchNESARecords };

