import express from 'express';
import passport from 'passport';

// Var
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {}),
  (req, res) => {
    res.redirect('/surveys');
  }
);

router.get('/api/logout', (req, res) => {
  // passport logout
  req.logout();

  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

export default router;
