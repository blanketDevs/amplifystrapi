module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69b5df9a38f731ae86560a73864b0eae'),
  },
});
