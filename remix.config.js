/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  devServerPort: 8002,
  publicPath: "/build/",
  serverBuildPath: "server/build.js",
  serverBuildTarget: 'node-cjs',
};
