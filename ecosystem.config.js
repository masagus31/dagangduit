module.exports = {
  apps: [{
    name: "whatsappbot",
    script: "index.js",
    watch: true,
    env: {
      "PORT": 3000
    }
  }, {
    name: "my-app",
    script: "npm",
    args: "start",
    watch: true,
    ignore_watch: ["node_modules"],
    max_restarts: 10,
    min_uptime: "30s"
  }]
}
