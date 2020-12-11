import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importing routes
import membroRoutes from './routes/membros';
import tipoRoutes from './routes/tipos';

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

// Routes
app.use('/api/membros', membroRoutes);
app.use('/api/tipos', tipoRoutes);

export default app;