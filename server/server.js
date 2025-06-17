const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());

app.get('/stats', (req, res) => {
  try {
    const rawData = fs.readFileSync('../playwright-report.json');
    const report = JSON.parse(rawData);

    const expected = report.suites.flatMap(suite =>
      suite.specs.map(spec => spec.ok ? 1 : 0)
    ).reduce((a, b) => a + b, 0);

    const unexpected = report.suites.flatMap(suite =>
      suite.specs.map(spec => spec.ok ? 0 : 1)
    ).reduce((a, b) => a + b, 0);

    const flaky = 0; // Customize if needed
    const duration = report.duration || 0;

    res.json({ expected, unexpected, flaky, duration });
  } catch (err) {
    res.status(500).json({ error: 'Could not read report' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
