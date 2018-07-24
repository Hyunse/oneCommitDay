// Modules
import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
// Config
import { DB_CONFIG } from './config/config_db';
import { COOKIE_KEY } from './config/config_keys';
// Models
import './models/User';
// Services
import './services/service_passport';
// Routes
import authRouter from './routes/route_auth';

// Connect mongo
mongoose.connect(
  DB_CONFIG.uri(),
  { useNewUrlParser: true }
);

// Var
const app = express();

// Init Middleware
app.use(
  cookieSession({
    // 30 Days
    maxAge: 30 * 24 * 60 * 1000,
    keys: [COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Use Routers
app.use(authRouter);

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);