export function roleMiddleware(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ detail: 'Autentikasi diperlukan' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ detail: 'Akses ditolak. Role Anda tidak memiliki izin.' });
    }

    next();
  };
}

export default roleMiddleware;
