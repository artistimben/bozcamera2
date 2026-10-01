# Boztech Bilişim web sitesi

Hatay geneline yönelik kamera güvenlik sistemi tanıtım sitesi. Düz HTML, CSS ve JavaScript ile hazırlanmıştır; derleme adımı veya paket kurulumu gerektirmez.

## Sunucuya ilk kez alma

Git deposunu web kökünün (`public_html`) dışında tutun. Böylece `.git` klasörü web üzerinden erişilebilecek yere konmaz. Sunucudaki kullanıcı ana klasöründe:

```sh
cd ~
git clone https://github.com/artistimben/bozcamera2.git bozcamera2
rsync -av --exclude='.git/' --exclude='.gitignore' --exclude='README.md' --exclude='google-ads-hazirlik.md' bozcamera2/ public_html/
```

Önce eski `public_html` içeriğinin yedeğini alın. Yeni dosyaları kopyalamadan önce eski sitenin giriş dosyasını (ör. `index.php`) ve eski yönlendirme kurallarını gözden geçirin; eski site yeni `index.html`'in açılmasını engelleyebilir. SSL yenileme için gereken `.well-known` klasörünü veya geçerli sunucu ayarlarını kontrol etmeden silmeyin.

Sonuçta `public_html/index.html` ve `public_html/assets/` bulunmalı. Alan adının HTTPS kullanması gerekir.

## Sonraki güncellemeleri çekme

Sunucuda kullanıcı ana klasöründe güncel kaynakları çekip yayın klasörüne kopyalayın:

```sh
cd ~/bozcamera2
git pull origin main
rsync -av --exclude='.git/' --exclude='.gitignore' --exclude='README.md' --exclude='google-ads-hazirlik.md' ./ ~/public_html/
```

## Reklam ve yayın notu

Google Ads site bağlantıları, reklam metinleri ve yayın öncesi kontrol listesi `google-ads-hazirlik.md` dosyasındadır. Dönüşüm ölçüm etiketi henüz eklenmemiştir; yayın öncesi hosting, iletişim ve gizlilik bilgilerini doğrulayın.
