import express from 'express';
import { default as routes } from './routes';
import { json } from 'body-parser';


const app = express();

app.use(json());
app.use('/api', routes.todos);
app.listen(3000);