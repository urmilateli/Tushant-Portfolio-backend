// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for all origins (ensure this is acceptable for your security requirements)
app.use(cors({ origin: "*" }));

app.use(express.json()); // Middleware to parse JSON bodies

// --- Database Connection ---
const connectDB = async () => {
  try {
    // Consider removing deprecated options if using Mongoose v6+
    await mongoose.connect(process.env.MONGO_URI/*, {
      useNewUrlParser: true, // Deprecated
      useUnifiedTopology: true, // Deprecated
    }*/);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// --- Routes ---

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api/upload', require('./routes/uploadRoute')); // Keep as is unless needs changing
app.use("/api/auth", require("./routes/authRoutes")); // Keep as is
app.use("/api/achievements", require("./routes/achievementRoutes")); // Keep as is
app.use("/api/articles", require("./routes/articleRoutes")); // Keep as is

// Renamed: Courses -> Projects
app.use("/api/myproject", require("./routes/myprojectRoutes")); // *** RENAME 'courseRoutes.js' to 'projectRoutes.js' ***

// Renamed: Myprojects -> Practiceprojects
app.use("/api/practiceprojects", require("./routes/practiceprojectRoutes")); // Updated path and required file

// --- Server Start ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));