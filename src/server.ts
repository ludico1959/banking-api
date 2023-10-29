import express from 'express';
import { peopleRoutes } from './routes/people.routes';

const app = express();

app.use(express.json());
app.use('/people', peopleRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Testing requests' });
});

app.listen(3333, () => console.log('Server is running'));
