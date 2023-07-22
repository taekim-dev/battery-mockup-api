const express = require('express');
const cors = require('cors');
const devicesData = require('./devicesData');

const app = express();

app.use(cors());

app.get('/devices', (req, res) => {
  res.json(devicesData);
});

app.get('/devices/:deviceName', (req, res) => {
  const deviceName = req.params.deviceName.replace(/_/g, ' '); // replace underscores with spaces
  const device = devicesData.find(d => d.deviceName === deviceName);

  if (!device) {
    return res.status(404).json({ message: 'Device not found.' });
  }

  return res.json(device);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
