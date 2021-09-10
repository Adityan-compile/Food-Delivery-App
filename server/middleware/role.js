const manageRole =
  (role = 'u') =>
  (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(403).json({
        status: 403,
        message: 'Forbidden',
      });
    }

    if (user.role === role) {
      next();
    } else {
      return res.status(403).json({
        status: 403,
        message: 'Forbidden',
      });
    }
  };

module.exports = manageRole;
