import express from 'express';
import serviceB from 'serviceB';

const app = express();

// routes for the other service are:
// .../services/serviceB
// .../services/serviceC
app.use('/services', serviceB);

app.get('/', (req, res) => {
  res.send('service A root');
});

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});