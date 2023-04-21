module.exports = {
  apps: [{
    name: "whatsappbot",
    script: "index.js",
    watch: true,
    env: {
      "PORT": 3000
    }
  }]
}
