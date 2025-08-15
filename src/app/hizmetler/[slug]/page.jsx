import { notFound } from "next/navigation";
import Link from "next/link";            // ✅ EKLE


const siteUrl = "https://www.siteniz.com"; // canlı alan adınla değiştir

const servicesData = {
  "dogalgaz-bakim": {
    title: "Doğalgaz Bakım",
    description:
      "Ankara’da doğalgaz tesisatlarınızın güvenliği ve verimliliği için profesyonel periyodik bakım hizmeti sunuyoruz. Sızdırmazlık testi, bağlantı kontrolü ve cihaz performans ölçümleriyle güvenli kullanım sağlarız.",
    content: `Doğalgaz bakım hizmetimiz, enerji tasarrufu ve güvenliği birlikte hedefler.
- Hat ve bağlantı noktaları modern cihazlarla kontrol edilir
- Sızdırmazlık ve basınç testleri uygulanır
- Kombi filtre temizliği ve yanma verimi ölçümleri yapılır
Düzenli bakım, ani arızaların önüne geçer, yakıt tüketimini düşürür. Ankara genelinde aynı gün randevu veriyoruz.`,
    hero: "/images/hero.jpg",
    heroAlt: "Doğalgaz bakım işlemi yapan teknisyen",
  },
  "dogalgaz-onarim": {
    title: "Doğalgaz Onarım",
    description:
      "Doğalgaz tesisatındaki arızaları hızlı ve güvenli şekilde onarıyoruz. Gaz kaçağı, boru değişimi ve bağlantı sorunlarında kalıcı çözümler sunuyoruz.",
    content: `Onarım süreci detaylı arıza tespitiyle başlar. Elektronik dedektörlerle kaçak noktası milimetrik olarak belirlenir.
Gevşek bağlantılar sıkılaştırılır, aşınmış contalar ve zarar görmüş borular yenilenir. İş bitiminde sızdırmazlık testi yaparak sistemi güvenle teslim ederiz.`,
    hero: "/images/hero.jpg",
    heroAlt: "Doğalgaz hattı onarımı",
  },
  "kombi-montaji": {
    title: "Kombi Montajı",
    description:
      "Yeni kombinizin montajını standartlara uygun, garantili ve hızlı şekilde gerçekleştiriyoruz. Yer seçimi, baca uygunluğu, gaz ve su bağlantıları kontrol edilir.",
    content: `Montaj öncesi yerleşim ve havalandırma koşulları değerlendirilir. Orijinal montaj aparatlarıyla kurulum yapılır.
Sızdırmazlık testi, devreye alma ve kullanıcı eğitimi sonrası cihazı güvenle teslim ederiz. İsterseniz eski cihazın sökümünü de yaparız.`,
    hero: "/images/hero.jpg",
    heroAlt: "Yeni kombi montajı",
  },
  "gaz-kacagi": {
    title: "Gaz Kaçağı Tespiti ve Onarımı",
    description:
      "Profesyonel gaz kaçağı tespiti ve onarımı ile can ve mal güvenliğinizi sağlıyoruz. Ankara’da acil servis desteği sunuyoruz.",
    content: `Gaz kaçağı şüphesinde vakit kaybetmeden profesyonel destek alın. Elektronik dedektör ve köpük test yöntemleriyle kaçak noktası bulunur.
Onayınızla anında onarım yapılır, tekrar sızdırmazlık testi uygulanır ve güvenli kullanım sağlanır.`,
    hero: "/images/hero.jpg",
    heroAlt: "Gaz kaçağı tespiti yapan teknisyen",
  },
  "dogalgaz-servis": {
    title: "Doğalgaz Servis",
    description:
      "Ankara genelinde doğalgaz teknik servis: keşif, bakım, onarım, parça temini ve montaj. Hızlı randevu ve faturalı işçilik.",
    content: `Marka bağımsız servis yaklaşımımızla arıza tespiti, periyodik bakım ve montaj süreçlerini tek merkezden yönetiyoruz.
Şeffaf fiyatlandırma, hızlı yedek parça temini ve temiz işçilik prensipleriyle çalışırız.`,
    hero: "/images/hero.jpg",
    heroAlt: "Doğalgaz servis aracı",
  },
  "dogalgaz-tesisati": {
    title: "Doğalgaz Tesisatı",
    description:
      "Yeni doğalgaz tesisatı kurulumunda proje onayı, borulama, bağlantı ve sızdırmazlık testleri dahil anahtar teslim hizmet veriyoruz.",
    content: `Tesisat tasarımından montaja kadar tüm adımlar Başkentgaz prosedürlerine uygun yürütülür.
Basınç ve sızdırmazlık testleri tamamlandıktan sonra gerekli onay süreçleri işletilir. Güvenlik ve estetik birlikte gözetilir.`,
    hero: "/images/hero.jpg",
    heroAlt: "Doğalgaz boru montajı",
  },
  "kombi-tamiri": {
    title: "Kombi Tamiri",
    description:
      "Kombi arızalarında hızlı ve garantili tamir hizmeti. Orijinal yedek parça ve uzman ekip ile kalıcı çözümler.",
    content: `Hata kodları, basınç değerleri, sensör ve ateşleme kontrolleri kapsamlı şekilde yapılır.
Gerekli parça değişimleri orijinal muadillerle sağlanır, ısıtma/sıcak su performansı test edilerek cihaz teslim edilir.`,
    hero: "/images/hero.jpg",
    heroAlt: "Kombi arıza onarımı",
  },
  "demirdokum-servis": {
    title: "Demirdöküm Kombi Tamiri",
    description:
      "Demirdöküm marka kombilerde uzman servis. Eşanjör, fan, üç yollu vana ve sensör arızalarında etkin çözümler.",
    content: `Markaya özel eğitimli ustalarımızla Demirdöküm kombilerin bakım ve onarımını yapıyoruz.
Performans artırıcı temizlik işlemleri ve yaz/kış geçiş ayarlarını uyguluyoruz.`,
    hero: "/images/hero.jpg",
    heroAlt: "Demirdöküm kombi servisi",
  },
  "baskentgaz-yekili-servis": {
    title: "Başkentgaz Yetkili Servis",
    description:
      "Başkentgaz prosedürlerine uygun kurulum, dönüşüm ve onarım. Resmî standartlarda güvenli uygulama ve evrak yönetimi.",
    content: `Proje onayı, gaz açma ve kontrol süreçlerinde tüm adımları mevzuata uygun yürütürüz.
Uygulamalar sızdırmazlık ve basınç testleriyle kayıt altına alınır, gerekli raporlar düzenlenir.`,
    hero: "/images/hero.jpg",
    heroAlt: "Başkentgaz kontrol süreci",
  },
  "batikent-dogalgaz-servis": {
    title: "Batıkent Doğalgaz Servis",
    description:
      "Batıkent ve çevresinde doğalgaz bakım, onarım ve montaj. Aynı gün servis, hızlı çözüm.",
    content: `Bölge ekibimiz gaz kaçağı tespiti, kombi onarımı ve tesisat işleri için hızlıca adresinize ulaşır.
Standartlara uygun uygulamalar ve faturalı işçilik ile güven sunarız.`,
    hero: "/images/hero.jpg",
    heroAlt: "Batıkent doğalgaz servis hizmeti",
  },
  "ankara-dogalgaz-servis": {
    title: "Ankara Doğalgaz Servis",
    description:
      "Ankara’nın tüm ilçelerinde doğalgaz tesisat, bakım ve onarım hizmetleri. Güvenli, hızlı ve garantili çözümler.",
    content: `Keşif, arıza tespiti, parça temini ve montaj süreçlerinin tamamını organize ederiz.
Randevularınızı programınıza göre planlar, iş bitiminde tüm testleri yaparak temiz teslim ederiz.`,
    hero: "/images/hero.jpg",
    heroAlt: "Ankara genelinde doğalgaz servis ağı",
  },
};

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* SAĞ İÇERİK - Mobilde önce */}
  <main className="md:col-span-3 order-1 md:order-none">
    {/* HERO */}
    <section
      className="relative bg-cover bg-center rounded-lg overflow-hidden mb-8"
      style={{
        backgroundImage: `url('${service.hero}')`,
        minHeight: "250px",
      }}
      aria-label={service.heroAlt || service.title}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative p-6 flex items-end h-full">
        <div>
          <p className="text-sm text-white/80">Hizmetler</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white">{service.title}</h1>
          <p className="mt-3 text-white/90">{service.description}</p>
        </div>
      </div>
    </section>

    {/* İÇERİK */}
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
    <p className="text-lg text-gray-800 mb-6">{service.description}</p>
    <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-8">
      {service.content}
    </div>
  </main>

  {/* SOL LİSTE - Mobilde altta */}
  <aside className="md:col-span-1 order-2 md:order-none">
    <h3 className="text-lg font-semibold mb-3 text-white border rounded-xl p-3 text-center bg-gray-900">Tüm Hizmetler</h3>
    <ul className="border rounded-lg divide-y divide-gray-200 shadow-sm">
      {Object.entries(servicesData).map(([key, item]) => (
        <li key={key}>
          <Link
            href={`/hizmetler/${key}`}
            className={`block px-4 py-3 hover:bg-gray-50 transition ${
              key === slug ? "bg-gray-100 font-semibold border-l-4 border-blue-500" : "text-gray-700"
            }`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
</div>
  );
}