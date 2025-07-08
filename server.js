const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received message from:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // You could also save to a file or DB here
  res.send("Thank you for your message!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
