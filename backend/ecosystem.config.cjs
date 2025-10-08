module.exports = {
  apps: [
    {
      name: "redvelvetlive-api",
      script: "./src/server.js", // Mantiene la entrada principal correcta
      instances: 1,              // Usa "max" para todos los núcleos disponibles
      exec_mode: "cluster",
      watch: false,

      // === Variables de entorno (modo desarrollo) ===
      env: {
        NODE_ENV: "development",
        PORT: 3001,
        SITE_URL: "https://www.redvelvetlive.com", // 👈 agregado para sitemap
        FRONTEND_ORIGIN: "https://www.redvelvetlive.com, http://localhost:5173"
      },

      // === Variables para entorno producción ===
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
        SITE_URL: "https://www.redvelvetlive.com",
        FRONTEND_ORIGIN: "https://www.redvelvetlive.com"
      },

      // === Configuración de logs ===
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,

      // === Tolerancia a reinicios ===
      max_restarts: 10,
      min_uptime: 5000,
      kill_timeout: 5000
    }
  ]
};

