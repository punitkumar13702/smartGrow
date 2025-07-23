const router = require("express").Router();

// Route requires
const authRoutes = require("./authRoutes");
const protectedRoutes = require("./protectedRoutes");

const defaultRoutes = [
  { path: "/auth", router: authRoutes },
  { path: "/protected", router: protectedRoutes },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.router);
});


module.exports = router;