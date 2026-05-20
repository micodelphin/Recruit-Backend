// /**
//  * NIDA Service (Simulated)
//  * When the real NIDA API is provided, replace the logic
//  * inside fetchNIDAProfile with a real axios call.
//  * The controller will not need any changes.
//  */

// const simulatedData = {
//   '1199880012345678': {
//     nationalId: '1199880012345678',
//     firstName: 'Alice',
//     lastName: 'Mukamana',
//     dateOfBirth: '1998-04-15',
//     gender: 'Female',
//     phone: '+250788123456',
//     address: 'KG 123 St, Kicukiro',
//     province: 'Kigali City',
//     district: 'Kicukiro',
//   },
//   '2222222222222222': {
//     nationalId: '2222222222222222',
//     firstName: 'Teta',
//     lastName: 'Naomi',
//     dateOfBirth: '2001-12-03',
//     gender: 'Female',
//     phone: '+250722987654',
//     address: 'KN 45 Ave, Gasabo',
//     province: 'Kigali City',
//     district: 'Gasabo',
//   },
//   '1111111111111111': {
//     nationalId: '1111111111111111',
//     firstName: 'alain',
//     lastName: 'Muhizi',
//     dateOfBirth: '1998-10-22',
//     gender: 'Male',
//     phone: '+250783770770',
//     address: 'KG 78 Rd, Nyarugenge',
//     province: 'Kigali City',
//     district: 'Nyarugenge',
//   },
// };

// const fetchNIDAProfile = async (nationalId) => {
//   // Simulate network delay
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   // Validate ID format — must be 16 digits
//   if (!nationalId || !/^\d{16}$/.test(nationalId)) {
//     return {
//       success: false,
//       message: 'Invalid National ID. Must be exactly 16 digits.',
//     };
//   }

//   const profile = simulatedData[nationalId];

//   // If ID is not in our simulated data
//   // generate a generic profile for demo purposes
//   if (!profile) {
//     return {
//       success: true,
//       data: {
//         nationalId,
//         firstName: 'Demo',
//         lastName: 'Citizen',
//         dateOfBirth: '1995-01-01',
//         gender: 'Male',
//         phone: '+250700000000',
//         address: 'Kigali, Rwanda',
//         province: 'Kigali City',
//         district: 'Gasabo',
//       },
//     };
//   }

//   return {
//     success: true,
//     data: profile,
//   };
// };

// module.exports = { fetchNIDAProfile };