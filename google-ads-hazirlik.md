# Boztech Bilişim — Google Ads hazırlık notları

> **Yayına almadan önce çözülmesi gereken engel:** 1 Ekim 2026 tarihli dış erişim kontrolünde `acboz.com.tr` ve `www.acboz.com.tr` ana sayfası, üç açılış sayfası ve `sitemap.xml` sunucudan **HTTP 403 Forbidden** döndürdü. TLS bağlantısı kuruluyor; ancak web sunucusu içeriğe erişimi reddediyor. Hosting panelinde alan adının belge kökünü bu projenin dosyalarının yüklendiği klasöre yönlendirin, klasör/dosya okuma izinlerini ve varsa `.htaccess`/güvenlik kurallarını kontrol edin. Düzelttikten sonra bu nottaki tüm HTTPS URL’lerini dış ağdan tekrar deneyin. Google Ads’te kampanyayı bu 403 durumu çözülmeden başlatmayın.

## Önerilen site bağlantıları

Google Ads’te **Kampanya > Öğeler > Site bağlantıları** bölümüne ekleyin. Metinler kısa tutuldu; her bağlantı kendi ilgili sayfasına gider. En az dört bağlantıyı etkinleştirin, açıklama satırlarının ikisini de ekleyin.

| Bağlantı metni | Açıklama 1 | Açıklama 2 | Nihai URL |
| --- | --- | --- | --- |
| Kamera Sistemleri | İzleme alanı ve kayıt planı | Kurulum kapsamını netleştirin | https://acboz.com.tr/kamera-guvenlik-sistemleri.html |
| İş Yeri Kameraları | Mağaza ve ofisler için plan | İşletmenize uygun sistemi konuşun | https://acboz.com.tr/is-yeri-kamera-sistemleri.html |
| Ev Kamera Sistemleri | Ev ve çevre alanları için çözüm | Telefondan izleme seçeneğini sorun | https://acboz.com.tr/ev-kamera-sistemleri.html |
| Bakım ve Destek | Mevcut sistem için destek talebi | Görüntü veya kayıt sorununu anlatın | https://acboz.com.tr/kamera-bakim-servisi.html |
| Hatay Hizmet Bölgeleri | Dörtyol merkezli hizmet yaklaşımı | İlçe bazında uygunluğu sorun | https://acboz.com.tr/hizmet-bolgeleri.html |
| Keşif ve Teklif | Konum ve ihtiyacınızı bize iletin | Arayın ya da WhatsApp’tan yazın | https://acboz.com.tr/iletisim.html#talep |

Google, sitelink metnini çoğu dilde 25 karakterle sınırlar ve açıklamaları eklemeyi önerir. Sitelinklerin görünmesi arama sorgusuna ve açık artırmaya bağlıdır; her gösterimde çıkmaları garanti değildir.

## Arama reklamı için başlangıç metinleri

**Nihai URL:** `https://acboz.com.tr/`  
**Görünen yol:** `hatay` / `kamera`

**Başlık seçenekleri** (her biri 30 karakter sınırının altında):

- Hatay Kamera Sistemleri
- Kamera Güvenlik Sistemi
- Dörtyol Kamera Sistemleri
- İş Yeri Kamera Kurulumu
- Ev Kamera Sistemleri
- Kamera Kurulumu ve Destek
- Hatay’da Kamera Keşfi
- Kamera Sistemi Teklifi Al
- Arayın, İhtiyacınızı Anlatalım
- Kayıt ve Uzaktan İzleme
- Mevcut Sisteme Teknik Destek
- Dörtyol Merkezli Boztech
- Hatay Geneli Talep Alınır
- Bakım ve Arıza Desteği
- Kamera Sistemini Planlayın

**Açıklama seçenekleri** (her biri 90 karakter sınırının altında):

- Ev ya da iş yeriniz için kamera, kayıt ve uzaktan izleme seçeneklerini birlikte planlayın.
- Hatay genelinden talep alıyoruz. Keşif ve kurulum uygunluğu ilçenize göre netleşir.
- Kamera kurulumu, mevcut sisteme ekleme veya bakım desteği için Boztech Bilişim’i arayın.
- Konumunuzu ve ihtiyacınızı paylaşın. Dörtyol dışındaki hizmet uygunluğunu teyit edelim.

## Kampanya kurulurken kontrol edin

- **Nihai URL:** `https://acboz.com.tr/` kullanın. Reklamdaki alan adı ve açılan sayfanın alan adı aynı olmalı; sayfalar HTTPS üzerinden açılmalı.
- **Konum:** Hatay ilini hedefleyin. Yalnızca bölgede bulunan ya da düzenli olarak bölgede olan kişilere ulaşmak istiyorsanız konum seçeneklerinde “Hedeflediğiniz konumlarda bulunan veya bu konumlarda düzenli bulunan kişiler” seçeneğini kullanın.
- **Arama öğesi:** `0545 565 85 89` numarasını arama öğesi olarak ekleyin. Web sitesindeki telefon bağlantıları telefonda tek dokunuşla arama başlatır.
- **Konum öğesi:** Gerçek işletme konumu Google İşletme Profili’nde doğrulanmışsa ekleyin. Ziyaret kabul edilmeyen veya doğrulanamayan bir adresi reklamda göstermeyin.
- **Dönüşüm ölçümü:** Telefon araması ve WhatsApp talebini Google Ads’te dönüşüm olarak ölçmek için Ads dönüşüm kimliği/etiketi gerekir. Bu bilgiler henüz verilmediği için siteye takip kodu eklenmedi. Ölçüm eklenmeden önce gizlilik bilgilendirmesini kullanılan etikete göre güncelleyin.
- **Reklam görselleri:** Google, Arama kampanyalarında en az üç farklı ve ilgili görsel eklenmesini öneriyor. Sitede şu an bir ana fotoğraf var; görsel öğe kullanacaksanız farklı açılardan çekilmiş gerçek kurulum/ürün fotoğrafları ekleyin.
- **Bölge vaadi:** Site Hatay genelinden talep alındığını, Dörtyol dışındaki keşif ve kurulum uygunluğunun konuma göre netleştirildiğini belirtiyor. Reklam metninde bunu kesin ve koşulsuz hizmet garantisi gibi sunmayın.
- **Yayın öncesi:** Alan adı hosting’e bağlandıktan sonra altı sitelink URL’sinin her birini açın; HTTPS, telefon araması, WhatsApp formu ve gizlilik bağlantısını gerçek telefonda deneyin. Hosting ve veri saklama ayrıntıları gizlilik sayfasında henüz kesinleştirilmemiştir.

## Örnek kısa ek öğeler

**Açıklama öğeleri:** Dörtyol Merkezli · İhtiyaca Göre Planlama · Telefon ve WhatsApp · Açık Kapsam ve Teklif

**Yapılandırılmış snippet başlığı:** Hizmetler

**Değerler:** Kamera Kurulumu · İş Yeri Kamerası · Ev Kamera Sistemi · Bakım Desteği

## Bağlantılar ve performans ölçütleri

- [Google Ads site bağlantıları](https://support.google.com/google-ads/answer/2375416?hl=tr)
- [Google Ads duyarlı arama reklamları](https://support.google.com/google-ads/answer/7684791?hl=tr)
- [Google Ads öğeleri](https://support.google.com/google-ads/answer/12073962?hl=tr)
- [Google Ads nihai URL gereksinimleri](https://support.google.com/google-ads/answer/2684490?hl=tr)
- [Google Ads konum hedefleme](https://support.google.com/google-ads/answer/2453995?hl=tr)
- [Core Web Vitals ölçütleri](https://developers.google.com/search/docs/appearance/core-web-vitals)
