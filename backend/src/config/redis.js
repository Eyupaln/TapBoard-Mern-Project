import Redis from "ioredis";

const redis = new Redis({
  // Redis sunucusunun adresi (localhost = kendi bilgisayarınız, 127.0.0.1 ile aynı)
  host: "localhost",
  
  // Redis'in dinlediği port numarası (varsayılan Redis portu 6379'dur)
  port: 6379,
  
  // Bağlantı koptuğunda tekrar deneme stratejisi
  // times: kaçıncı deneme olduğunu gösterir
  retryStrategy: (times) => {
    // Her denemede biraz daha fazla bekle (50ms, 100ms, 150ms...)
    // Ama maksimum 2000ms (2 saniye) bekle
    const delay = Math.min(times * 50, 2000);
    return delay; // Kaç milisaniye sonra tekrar denesin
  },
});

redis.on("connect", () => {
  console.log("✅ Redis bağlantısı başarılı");
});

redis.on("error", (err) => {
  console.error("❌ Redis bağlantı hatası:", err);
});

export default redis;
