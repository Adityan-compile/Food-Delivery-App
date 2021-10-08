const redisCache = require('express-redis-cache');
const chalk = require('chalk');

const { REDIS_PORT, REDIS_HOST, CACHE_EXPIRY } = process.env;

const cache = redisCache({
  host: REDIS_HOST,
  port: REDIS_PORT,
  expire: {
    200: parseInt(CACHE_EXPIRY),
    500: 0,
    400: 0,
    xxx: parseInt(CACHE_EXPIRY),
  },
});

cache.on('connected', () => {
  console.info(
    chalk.white.bgBlue(`[${new Date().toJSON()}]`),
    chalk.green('Cache Connected'),
  );
});

cache.on('disconnected', () => {
  console.info(
    chalk.white.bgRed(
      `Error [${new Date().toJSON()}]`,
      'Redis Cache Disconnected',
    ),
  );
});

module.exports = cache;
