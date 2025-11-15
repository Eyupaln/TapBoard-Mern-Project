import redis from "../src/config/redis.js";

const rateLimiter = async (req, res, next) => {
  try {
    const ip = req.ip || req.connection.remoteAddress; //mevcut ip
    const key = `ratelimit:${ip}`; //ip keyi
    const limit = 8; // 5 istek
    const window = 10; // 10 saniye

    // Mevcut istek sayısını al
    const current = await redis.get(key);

    if (current === null) {
      // İlk istek
      // setex: Key oluştur, 10 saniye sonra otomatik sil, değeri 1 yap
      await redis.setex(key, window, 1);
      return next();
    }

    const requestCount = parseInt(current);

    if (requestCount >= limit) {
      console.log(` ${ip} - Limit aşıldı (${requestCount}/${limit})`);
      return res.status(429).json({
        message: "Çok fazla istek, lütfen daha sonra tekrar deneyin",
        retryAfter: await redis.ttl(key), //delay süresi!
      });
    }

    await redis.incr(key);
    console.log(` ${ip} - İstek kabul edildi (${requestCount + 1}/${limit})`);
    next();
  } catch (error) {
    console.error("Rate Limit hatası:", error);
    // Redis hatası olsa bile devam et
    next();
  }
};

export default rateLimiter;
