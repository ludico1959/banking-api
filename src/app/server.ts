import { config } from 'dotenv';
import app from './app';

config({ path: '.env' });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
