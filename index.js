import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT ?? 5001;

app.use(cors({ origin: 'https://reland-client.vercel.app/' }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

try {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.error(error.message);
}
