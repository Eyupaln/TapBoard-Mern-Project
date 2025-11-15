# TapBoard - Sade ve Kullanışlı Not Uygulaması

Merhaba! TapBoard, MERN stack ile geliştirilmiş, sade ve kullanıcı dostu bir not alma uygulamasıdır. Karmaşık özelliklerden uzak durarak temel not alma ihtiyaçlarına odaklandım.

## Proje Hakkında

TapBoard'u geliştirirken amacım, gereksiz karmaşıklıktan uzak, temel not işlevlerine odaklanan bir uygulama yaratmaktı. Modern web teknolojilerini kullanarak hem öğrenme sürecimi ilerletmek hem de pratik bir ürün ortaya çıkarmak istedim.

### Neden Bu Projeyi Yaptım?

- Sade ama işlevsel bir not uygulaması yaratmak
- MERN stack ile full-stack geliştirme deneyimi kazanmak
- Docker ve Redis gibi modern araçları pratikte kullanmak
- Temiz ve anlaşılır kod yazmayı pratik etmek

##  Teknolojiler

### Frontend
- **React.js** - Kullanıcı arayüzü
- **React Router** - Sayfa yönlendirmeleri
- **Axios** - API istekleri
- **DaisyUI + Tailwind CSS** - Modern ve responsive tasarım
- **Lucide React** - İkonlar
- **React Hot Toast** - Bildirimler

### Backend
- **Node.js** - Sunucu tarafı JavaScript
- **Express.js** - Web framework
- **MongoDB** - NoSQL veritabanı
- **Mongoose** - MongoDB object modeling
- **Redis (Docker)** - Önbellekleme ve performans
- **Docker** - Container yönetimi

### Diğer Araçlar
- **dotenv** - Ortam değişkenleri
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - API rate limiting

##  Özellikler

### Temel Not İşlemleri
-  **Not Oluşturma** - Hızlı ve kolay not ekleme
-  **Not Güncelleme** - Mevcut notları düzenleme
-  **Not Silme** - İstenmeyen notları kaldırma
-  **Not Listeleme** - Tüm notları görüntüleme

### Teknik Özellikler
-  Responsive tasarım (mobil uyumlu)
-  Docker üzerinde Redis entegrasyonu
-  MongoDB ile güvenli veri saklama
-  Redis ile hızlı veri erişimi
-  RESTful API mimarisi
-  Rate limiting koruması
-  Temiz ve anlaşılır kod yapısı
-  Modern UI/UX (DaisyUI tema sistemi)

**Not:** Bu proje bilinçli olarak sade tutulmuştur. Kullanıcı kimlik doğrulama gibi karmaşık özellikler eklenmemiş, temel not işlevlerine odaklanılmıştır.

## Kurulum

### Gereksinimler

Bilgisayarınızda şunların kurulu olması gerekiyor:
- Node.js (v14 veya üzeri)
- MongoDB (lokal veya MongoDB Atlas)
- Docker (Redis için)
- npm veya yarn

### Adım Adım Kurulum

**1. Projeyi klonlayın:**
```bash
git clone https://github.com/Eyupaln/TapBoard-Mern-Project.git
cd TapBoard-Mern-Project
```

**2. Bağımlılıkları yükleyin:**
```bash
# Root dizinde
npm install

# Backend bağımlılıkları
cd backend
npm install

# Frontend bağımlılıkları
cd ../frontend
npm install
cd ..
```

**3. Ortam değişkenlerini ayarlayın:**

Backend klasöründe `.env` dosyası oluşturun:
```env
NODE_ENV=production
MONGODB_URI=mongodb://localhost:27017/tapboard
REDIS_URL=redis://localhost:6379
PORT=5001
```

**MongoDB Atlas kullanıyorsanız:**
```env
MONGODB_URI=mongodb+srv://kullaniciadi:sifre@cluster.mongodb.net/tapboard
```

**4. MongoDB'yi başlatın:**
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongodb
# veya
brew services start mongodb-community
```

**5. Redis'i Docker ile başlatın:**

```bash
# Redis container'ını çalıştır
docker run -d --name tapboard-redis -p 6379:6379 redis:latest

# Container'ın çalıştığını kontrol et
docker ps

# Redis'i test et
docker exec -it tapboard-redis redis-cli ping
# Yanıt: PONG
```

**Redis container yönetimi:**
```bash
# Durdur
docker stop tapboard-redis

# Başlat
docker start tapboard-redis

# Logları gör
docker logs tapboard-redis

# Tamamen kaldır
docker rm -f tapboard-redis
```

**6. Uygulamayı çalıştırın:**

**Geliştirme modu (önerilen - her ikisi birden):**
```bash
npm run dev
```

**Ayrı ayrı çalıştırmak isterseniz:**
```bash
# Terminal 1 - Backend
npm start

# Terminal 2 - Frontend
npm run client
```

**7. Tarayıcınızda açın:**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5001`

##  Proje Yapısı

```
TapBoard-Mern-Project/
├── backend/
│   ├── src/
│   │   ├── config/         # Veritabanı ve Redis ayarları
│   │   ├── controllers/    # İş mantığı
│   │   ├── models/         # MongoDB şemaları
│   │   ├── routes/         # API route'ları
│   │   ├── middleware/     # Rate limiting, CORS
│   │   └── server.js       # Ana sunucu dosyası
│   ├── .env                # Ortam değişkenleri
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # React bileşenleri
│   │   ├── pages/          # Sayfa bileşenleri
│   │   ├── lib/            # Axios config
│   │   └── App.jsx
│   └── package.json
│
├── package.json            # Root package.json
└── README.md
```

## 🔧 API Endpoint'leri

### Not İşlemleri
```
GET    /api/notes            # Tüm notları getir
POST   /api/notes            # Yeni not oluştur
GET    /api/notes/:id        # Tek not getir
PUT    /api/notes/:id        # Not güncelle
DELETE /api/notes/:id        # Not sil
```

### Örnek İstekler

**Yeni Not Oluşturma:**
```json
POST /api/notes
{
  "title": "Alışveriş Listesi",
  "content": "Süt, ekmek, yumurta"
}
```

**Not Güncelleme:**
```json
PUT /api/notes/507f1f77bcf86cd799439011
{
  "title": "Güncellenmiş Başlık",
  "content": "Güncellenmiş içerik"
}
```

**Not Silme:**
```bash
DELETE /api/notes/507f1f77bcf86cd799439011
```

##  Kullanım

1. **Ana Sayfayı Açın:** `http://localhost:3000` adresine gidin
2. **Not Ekleyin:** "Yeni Not" butonuna tıklayarak not oluşturun
3. **Notları Görüntüleyin:** Tüm notlarınız kart şeklinde listelenir
4. **Düzenleyin:** Herhangi bir nota tıklayarak düzenleyebilirsiniz
5. **Silin:** İstenmeyen notları sil butonuyla kaldırabilirsiniz

## 🐛 Sorun Giderme

### MongoDB Bağlantı Hatası
```bash
# MongoDB'nin çalıştığını kontrol edin
mongod --version

# MongoDB'yi başlatın
mongod

# Connection string'i kontrol edin (.env dosyası)
```

### Redis Bağlantı Hatası
```bash
# Docker container'ının çalıştığını kontrol edin
docker ps

# Container çalışmıyorsa başlatın
docker start tapboard-redis

# Redis'e bağlantıyı test edin
docker exec -it tapboard-redis redis-cli ping

# Container loglarını görüntüleyin
docker logs tapboard-redis
```

### Port Zaten Kullanımda
```bash
# Portu kontrol edin (Windows)
netstat -ano | findstr :5001

# Portu kontrol edin (Mac/Linux)
lsof -i :5001

# .env dosyasında farklı port kullanın
PORT=5002
```

### Frontend Backend'e Bağlanamıyor
- Backend'in çalıştığından emin olun (`http://localhost:5001`)
- CORS ayarlarını kontrol edin
- `frontend/src/lib/axios.js` dosyasında `baseURL` kontrol edin
- Tarayıcı konsolunda (F12) hataları inceleyin
- Network sekmesinde isteklerin doğru URL'e gittiğini kontrol edin

### Docker ile İlgili Sorunlar
```bash
# Tüm container'ları listele
docker ps -a

# Container loglarını görüntüle
docker logs tapboard-redis

# Container'ı tamamen kaldırıp yeniden başlat
docker rm -f tapboard-redis
docker run -d --name tapboard-redis -p 6379:6379 redis:latest

# Docker daemon çalışıyor mu?
docker info
```

### Vite Build Sorunları
```bash
# Cache'i temizle
cd frontend
rm -rf node_modules/.vite
rm -rf dist

# Tekrar başlat
npm run dev
```

### Rate Limit Hatası
Eğer "Yavaş ol! Çok hızlı not oluşturuyorsun" hatası alıyorsanız:
- Bu normal bir güvenlik özelliğidir
- Birkaç saniye bekleyin
- Backend'de rate limit ayarlarını değiştirebilirsiniz

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyorum! Projeyi geliştirmek için:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin yeni-ozellik`)
5. Pull Request açın

### Geliştirme Fikirleri
- [ ] Kullanıcı kimlik doğrulama (JWT)
- [ ] Not kategorileri
- [ ] Arama ve filtreleme
- [ ] Dark mode toggle
- [ ] Not paylaşma özelliği
- [ ] Markdown desteği
- [ ] Etiket sistemi

## 📝 Lisans

Bu proje ISC lisansı altında lisanslanmıştır.

## 📧 İletişim

Sorularınız veya önerileriniz için:
- GitHub: [@eypaln65@gmail.com](https://github.com/Eyupaln)
- Proje: [TapBoard-Mern-Project](https://github.com/Eyupaln/TapBoard-Mern-Project)

---

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](screenshots/home.png)
*Not listeleme ekranı - Tüm notlarınız kart görünümünde*


## 🎯 Öğrenme Çıktıları

Bu proje geliştirme sürecinde:
- ✅ MERN stack'in tüm bileşenleriyle çalıştım
- ✅ Docker ve container teknolojisini pratikte kullandım
- ✅ Redis ile önbellekleme stratejileri öğrendim
- ✅ RESTful API tasarımı deneyimi kazandım
- ✅ Modern React patterns (hooks, context) uyguladım
- ✅ Rate limiting ve güvenlik önlemleri ekledim

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Not:** Bu proje öğrenme amaçlı geliştirilmiştir ve sürekli olarak güncellenmektedir. Önerilerinizi ve katkılarınızı bekliyorum!
