const express = require('express');
const app = express();

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  if (env === 'development') console.log(`React UI listening on port: 3000`);
});