const redisCache = require('express-redis-cache');

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
  console.info('Redis Cache Connected');
});

cache.on('disconnected', () => {
  console.info('Redis Cache Disconnected');
});

module.exports = cache;
