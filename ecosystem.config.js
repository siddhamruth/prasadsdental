module.exports = {
  apps: [
    {
      name: "prasadsdental",
      script: ".next/standalone/server.js",
      cwd: "/var/www/prasadsdental",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
