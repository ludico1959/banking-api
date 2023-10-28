import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Testing requests' });
});

app.listen(3333, () => console.log('Server is running'));
