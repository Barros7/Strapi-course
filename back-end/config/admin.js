module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd28796e44d50f356dbf1e696bcc90e69'),
  },
});
