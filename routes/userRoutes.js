// const express = require('express');
// const router = express.Router();
// const { getAllUsers, deleteUser , deletePost } = require('../controllers/userController'); // Corrected import
// const checkAdmin = require('../middleware/checkAdmin');

// // Route to get all users
// router.get('/getAllUsers', getAllUsers);

// // Delete user route (protected by checkAdmin middleware)
// router.delete('/:userId', checkAdmin, deleteUser); // Use deleteUser here instead of UserController.deleteUser

// router.delete('/deletepost/:id', deletePost);
// module.exports = router;
const express = require('express');
const router = express.Router();
const { getAllUsers , getTotalUsers} = require('../controllers/userController'); // Import user-related controllers
// Import deletePost from postController
const checkAdmin = require('../middleware/checkAdmin');

// Route to get all users
router.get('/getAllUsers', getAllUsers);

// Delete user route (protected by checkAdmin middleware)
// Route to get total posts
router.get("/getTotalUsers",checkAdmin ,  getTotalUsers);



module.exports = router;
