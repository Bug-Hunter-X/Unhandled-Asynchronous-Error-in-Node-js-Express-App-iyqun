const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // Simulate a condition that can throw an error
    if (Math.random() < 0.5) {
      // Throw a random error
      throw new Error('Something went wrong!');
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});