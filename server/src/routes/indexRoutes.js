const router = require("express").Router();

// Route requires
const authRoutes = require("./authRoutes");
const protectedRoutes = require("./protectedRoutes");
const plantGrowthInfoRoutes = require("./plantGrowthInfoRoutes");

const defaultRoutes = [
  { path: "/auth", router: authRoutes },
  { path: "/protected", router: protectedRoutes },
  { path: "/plantGrowthInfo", router: plantGrowthInfoRoutes }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.router);
});


module.exports = router;