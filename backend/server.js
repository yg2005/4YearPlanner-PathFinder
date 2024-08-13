// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courses');
const plannerRoutes = require('./routes/planner');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 1337;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Use course routes
app.use('/api/courses', courseRoutes);
app.use('/api/planner', plannerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
