module.exports = {
  isAuthenticated: (req, res, next) => {
    // If it's authenticated
    if (req.isAuthenticated()) {
      next();
      return;
    }

    // If it's not authenticated
    res.redirect('/user/login');
  }
};
