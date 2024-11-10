const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // Make sure this path is correct

const app = express();

app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5177',  // Frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// Use the auth routes for any /api/auth path
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
