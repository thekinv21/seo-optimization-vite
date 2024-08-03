
# Vite Seo Optimizasiyonu

SEO optimizasyonu, bir web sitesinin içeriğinin ve yapısının arama motorları tarafından daha iyi anlaşılmasını sağlamak amacıyla yapılan teknik ve stratejik düzenlemeler bütünüdür. Amaç, belirli anahtar kelimelerle yapılan aramalarda sitenin arama motoru sonuç sayfalarında (SERP) daha üst sıralarda yer almasını sağlamaktır.



## Kurulum


 - Proje oluşturmak için 

 ```
 yarn create vite
```



 - İlk görünümü

![1](https://github.com/user-attachments/assets/2486f09e-00a2-493d-bc26-15381e43d1db)



 - Google arama makinesi bizim siteye girip `source` kısmını inceliyor ve projede `content` bileşenler ( örneğin resim vs ) olmasına ragmen sadece aşağıdaki kodun içindeki root kısmını görür ve burada birşey yoktur diye yoluna devam edecektir 

- Vite için geçerlidir

- NextJS için geçersizdir

![Ekran Resmi 2024-08-04 00 58 42](https://github.com/user-attachments/assets/b34d5b5a-31ea-483b-bbcb-e541f8b2dfbe)



Gördüğünüz gibi `root` altında herhangi bir bileşen bulunmamaktadır


## Yapılması Istenilen 


- Bizim yapmamız gereken işlem ise bunun önüne geçip Google arama makinesinde sadece `root` kısmını değil Web sitemizde bulunan bütün değerleri göstermektir



## 1.ADIM

- İlk olarak Web sitemizde bulunan sayfaların `index` adlarını sayfalara göre değişimini sağlamaktır




- Örneğin `Pixel Monitor` adına ve `id=1`  değerine sahip olan ürün detail sayfasına gittiğimizde üst kısım ona göre değişmeli

- #### Pixel Monitor | WebsiteName


##

React Vite kısmında bunu yapabilmek için ise `React Helmet` kütüphanesini kullanmamız gerekmektedir


```
yarn add react-helmet
```


![helmet](https://github.com/user-attachments/assets/4acf8bf1-9771-4d1f-9bd1-aad475754108)



- Helmet eklendikten sonra sayfa otomatik olarak sizin verdiğiniz `index` isimle değişmiş olacaktir


- `index` adını değişikliğini client tarafında göreceksiniz ama Google arama motoru görüp görmeyeceği belli değil React 19 versiyonu ile bu değişiklikler otomatik olarak gelmesi beklenmektedir


![Ekran Resmi 2024-08-03 21 02 09](https://github.com/user-attachments/assets/68115633-3d9e-4185-87e4-ec039c23acca)


## Website yüklenme hızı ayarları

- Seo optimizasyonu için önemli kısımlardan biride web sitemizin yüklenme hızıdır

- Seo optimizasyonlarınız doğru ise `TOP 10` listeye girebiliriniz eğer `TOP 1` vs olmak istiyorsanız google analitik kısmına ödeme yapmanız gerekmektedir


#### Web site yüklenme hızını kontrol etmek için

- Web sitenizin hızını kontrol etmek için `Lighthouse` veya `Page Speed` uzantısını kullanabilirsiniz

- Browserda mouse ile sağ tık yaparak `Lighthouse` kısmından hem `Mobil` hemde `Desktop` için Yükleme hızı testi yapabilirsiniz



### NOT
- Biz `DEV` modda çalıştırdığımız için Website biraz yavaş çalışacaktir ama `PRODUCTION` kısmında build alındıktan sonra web site hızı daha da yüksek olacaktir
### 





### Lighthouse Speed Test


- Web siteye her ekleme yaptığınızda Lighthouse ile test etmeyi ve SEO kısımlarını kontrol etmeyi unutmayınız 


![Ekran Resmi 2024-08-03 14 33 40](https://github.com/user-attachments/assets/e91b179e-a49d-4775-b210-11a8edaf6f59)






### Mobil için Test DEV mod

![Ekran Resmi 2024-08-03 14 42 53](https://github.com/user-attachments/assets/b9470209-123c-4dc5-9b46-4552612d89d5)

- Mobil için

    - `Performance`  
    - `Accessibility`
    - `Best Practices`  
    - `SEO` 
        
        
    kötü olmasının nedenini ve mevcut problemleri o kısımda biraz aşağıda bulabilirsiniz


##

- Bizim Website `DEV` modda çalıştığı için yavaş yüklenebilir Bu işlemi `PRODUCTION` modda denemeniz de gerekmektedir

- `PRODUCTION` modda denemek için aşağıdaki komutları takip edebilirsiniz

    - yarn run build
    
    - yarn run preview



- Tekrar Lighthouse ile test ediniz

![Ekran Resmi 2024-08-03 15 06 35](https://github.com/user-attachments/assets/6ffbe27b-a4e4-4143-91ec-7aa87268f374)


Gördüğünüz gibi build alındıktan sonra `PRODUCTION` modda website hızlı çalışmaktadır ama hala düşük değerler alıyorsanız demek oluyor ki SEO ayarlamalarını doğru yapmamışsınız






### Desktop için Test DEV mod

![Ekran Resmi 2024-08-03 14 44 18](https://github.com/user-attachments/assets/1f0d9004-bda4-47ef-ae80-d7bef6a08534)


- Desktop için

    - `Performance`  
    - `Accessibility`
    - `Best Practices`  
    - `SEO` 
        
        kötü olmasının nedenini ve mevcut problemleri o kısımda biraz aşağıda bulabilirsiniz





##



## 2.ADIM: VITE için SSR ( Server Side Rendering ) oluşturma 

Vite için SSR oluşturduğumuzda artık NextJS gibi davranmaya başlayacaktir ve bu işlemi yapabilmek için bazı paketleri kurmamız gerekmektedir

- Static dosyaları sıkıştırmak için
    
```
yarn add compression 
```

- Server Side Renderda ENV değerlerini belirtmek için
    
```
yarn add cross-env
```

- Serverı ayağa kaldırmak için
    
```
yarn add express
```


- `serve-static` alternatifidir ayrıca daha hızlı ve optimizasyonludur
    
```
yarn add sirv
```

Bu paketleri kurduktan sonra artık VITE projemizin `SCRIPT` komutlarını değiştirmemiz gerekmektedir



![before](https://github.com/user-attachments/assets/5b9d12e6-8623-4b20-95f3-b5b5471d8a42)

##


 - Client tarafında build alındıktan sonra ise `dist` klasörü altına yeni bir `client` klasörü ekliyoruz ve onun altına da bizim ssrManifesti ekliyoruz


 - Server tarafında build alındıktan sonra `dist` dosyası içinde bulunan `src` klasörü altına yeni bir `entry-server.jsx` dosyası oluşturuyoruz

- serve ile serverı ayağa kaldırıyoruz


![after](https://github.com/user-attachments/assets/f9d2fd9b-2b49-46c4-8a9b-1a09da549bb5)



## Ana Route dosyanın değiştirilmesi

- Değişiklik yapılmadan önce

![Ekran Resmi 2024-08-03 21 16 20](https://github.com/user-attachments/assets/67a2724c-56b0-429a-8b6b-bee5d67054bd)



- Client tarafında ilk görülen main.jsx dosyasının entry-client.jsx olarak değiştirilmeli ve dosya içinde bazı değişiklikler yapmalısınız





#



#### entry-client.jsx

- İlk olarak container'a erişim sağlamayalıyız, eriştikten sonra ise eğer `meta` hot reload veya container içinde herhangi bileşen yok ise yeni root oluşturarak render ediyoruz veya root zaten mevcut ise hydrateRoot ile onu buluyoruz

![Ekran Resmi 2024-08-03 21 20 28](https://github.com/user-attachments/assets/dd12c667-8f08-4deb-b60b-10803f2cdda0)





#### entry-server.jsx


- Server tarafında Web Sitemizi HTML'e döndürüp render ediyoruz 

![Ekran Resmi 2024-08-03 21 21 40](https://github.com/user-attachments/assets/93961f91-7f35-44b2-8e99-33664e2d2559)





## 3.ADIM: Custom SSR ekleme

- Aşağidaki kod kısmında VİTE için Custom SSR server oluşturduk

![test](https://github.com/user-attachments/assets/a9a05d3b-b281-4e7c-bc7f-9c02581d48cb)




- Daha sonra serverdan dönen HTML templati entry-client.jsx içinde tanımladık , head ve html içine yerleştirdik

![index gr](https://github.com/user-attachments/assets/2d8fdacc-7495-4f81-9de5-213d7dc973bb)


- Eslint kısmında ignorePatterns kısmında eklediğimiz custom server dosyasini eklememiz gerekmektedir, çünkü react nodejs bu kodu düzğün çalıştıramaz 



![eslint](https://github.com/user-attachments/assets/7172309e-e1e0-4ad6-93f6-1abc8965723f)


## Sonuç


![Ekran Resmi 2024-08-04 00 23 10](https://github.com/user-attachments/assets/3f069d7e-5a37-481c-b658-13a9fa066e14)


 ```
 yarn run build
```

 ```
yarn serve
```


Artık Vite NextJS gibi çalışmaya başlayacaktir ve `root` tag içinde Web sitemizde bulunan bütün değerler görünecektir


![Ekran Resmi 2024-08-04 00 20 11](https://github.com/user-attachments/assets/f5f90632-0f0b-40d8-a0f6-b3a58135d360)
