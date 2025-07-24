const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios"); // Import axios for making HTTP requests
const cron = require("node-cron");

const sequelize = require("./config/db"); // Sequelize DB connection
const { exec } = require("child_process"); // To run shell commands
const cookieParser = require('cookie-parser');
const path = require('path');


dotenv.config();
const app = express();

//const indexRoutes = require("./routes/indexRoutes");

// Trust the first proxy (important for HTTPS and cookies)
//app.set('trust proxy', 1);



app.use(cors({ origin: "http://localhost:5173", credentials: true }));
//app.use(cors({ origin: "https://track.shipsmithgroup.com", credentials: true }));
// app.use(cors({ origin: "*", credentials: true }));
// app.use(cors({
//     origin: "http://localhost:5173", // Allow frontend domain
//     credentials: true  // Allow cookies
// }));


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://track.shipsmithgroup.com");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });


app.use(express.json());
app.use(cookieParser())
//app.use("/api/", indexRoutes);



sequelize.authenticate()
  .then(() => {
    console.log("Database connected successfully");

    // Run migrations automatically
    exec("npx sequelize db:migrate", (err, stdout, stderr) => {
      if (err) {
        console.error("Error running migrations:", err);
        return;
      }
      console.log(" Migrations applied successfully:\n", stdout);
      if (stderr) console.error(stderr);

      // Start server only after migrations are applied
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`); 
      });  
    });
  })
  .catch(err => console.error(" Database connection error:", err));
