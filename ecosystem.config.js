module.exports = {
  apps: [{
    name: 'quarterly-quil',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    port: 8000,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
