const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send('Hello from Darshan!!!');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
