import cors from 'cors';
import express from 'express';
import './config/env.js'; // MUST be first — validates all env vars on startup
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import abstractRoutes from './routes/abstract.routes.js';
import adminRoutes from './routes/admin.routes.js';
import registrationRoutes from './routes/registration.routes.js';

const app = express();

// CORS
const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: true, // this is for allowig cookies per request
};

app.use(cors(corsOptions));
app.use(cors());    // option added so that it will instantly responf to the preflight 

// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));


// ─── Request Logging (dev only) ───────────────────────────────────────────────
if (env.NODE_ENV === 'development') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// ─── api Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
    version: '1.0.0',
  });
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/register', registrationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/abstracts', abstractRoutes);
// app.use("/api/login",loginRoutes)

// ─── 404 Handler ──────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Route not found.' });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(env.PORT, () => {
  console.log(`\n🚀 NexoraAI API running at http://localhost:${env.PORT}`);
  console.log(`📊 Admin API:  http://localhost:${env.PORT}/api/admin`);
  console.log(`💚 Health:     http://localhost:${env.PORT}/api/health`);
  console.log(`🌍 Mode:       ${env.NODE_ENV}\n`);
});

export default app;
