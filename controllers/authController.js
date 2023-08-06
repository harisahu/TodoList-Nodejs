const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectToDatabase = require('../config/mongoose');

const collectionName = 'registers';

// Secret key for JWT signing (replace this with a stronger secret key in production)
const secretKey = 'your-secret-key'

// Function to generate a JWT token
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Function to authenticate user credentials
async function authenticateUser(username, password) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const user = await collection.findOne({ username });

  if (!user) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    return user;
  }

  return null;
}

//bug
function dfbgh(){}

// Controller functions...



module.exports = {
    // ...Other functions
    authenticateUser,
};


